import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setUserData, setToken } from '../store/reducer';

const fetchApiUser = (token) => fetch('https://l8-upgrade-apis.vercel.app/api/user/', {
    method: 'get',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    })
})

const useAuth = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('Authorization');
        // 將local storage 的token寫入redux;
        dispatch(setToken(token));
        const fetchData = async () => {
            const jsonData = await fetchApiUser(token);
            const result = await jsonData.json();
            if (result.success || token) {
                setIsLogin(true);
                setIsLoading(false);
                dispatch(setUserData(result.data));
            } else {
                setIsLoading(false);
                setIsLogin(false);
                alert('權限不足');
                // 不用在使用push轉頁，統一由App.tsx 拿到更新後的isLogin時，觸發render時候改變路由
                // history.push('/login');
            }
        };
        fetchData();
    }, [])

    return { isLogin, isLoading }
}

export default useAuth;