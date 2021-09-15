import { useEffect, useState, useCallback } from "react";
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";
import '@/style.css';
import { useSelector, useDispatch } from 'react-redux';
function Login(props) {
    const dispatch = useDispatch();
    const history = useHistory()

    const fetchUsername = useCallback(
        () => dispatch({
            type: 'FETCH_USERNAME',
            username: data.username
        }),
        [dispatch]
    );
    const fetchName = useCallback(
        () => dispatch({
            type: 'FETCH_NAME',
            name: data.name
        }),
        [dispatch]
    );
    const fetchRole = useCallback(
        () => dispatch({
            type: 'FETCH_ROLE',
            role: data.role
        }),
        [dispatch]
    );
    const fetchLink = useCallback(
        () => dispatch({
            type: 'FETCH_LINK',
            link: data.link
        }),
        [dispatch]
    );
    const [data, setData] = useState({
        username: 'aaa',
        name: '333',
        role: '',
        link: '',
        token: '',
    })
    // useEffect(() => {
    //     // const susername = data.username
    //     const sname = data.name
    //     // const srole = data.role
    //     // const slink = data.link
    //     fetchName()
    // })

    const { setIslogin } = props;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [tip, setTip] = useState({ show: false, message: '' })

    const editUsername = (e) => {
        setUsername(e.target.value);
    }
    const editPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        // const token = JSON.parse(localStorage.getItem('Authorization'))
        fetch('https://l8-upgrade-apis.vercel.app/api/login', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'res')
            console.log(res.data.name, 'login data')
            if (res.success) {
                localStorage.setItem('Authorization', res.token);
                setIslogin(true);
                setData(data.username = res.data.username)
                setData(data.name = res.data.name)
                setData(data.role = res.data.role)
                setData(data.link = res.data.link)
                console.log('把name裝進去', data.name)
                fetchUsername()
                fetchName()
                fetchRole()
                fetchLink()
                history.push('/')
            } else {
                alert(res.message)
            }
        }).catch((error) => {
            console.log('Error:', error)
        })
    }
    return (
        <div className="box login_box">
            <div className="content">
                <h1>登入</h1>
                <div>
                    <div className="input_box input_box_account">
                        <span>帳號</span><input type="text" value={username} onChange={editUsername}></input>
                    </div>
                    <div className="input_box input_box_password">
                        <span>密碼</span><input type="password" value={password} onChange={editPassword}></input>
                    </div>
                </div>
                <button className="btn" onClick={() => handleLogin()}>登入</button>
                <Link to="/register">去註冊</Link>
            </div>
        </div>
    )
}
export default Login;