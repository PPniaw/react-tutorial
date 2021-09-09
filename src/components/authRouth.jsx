import { Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '@page/login'
import Register from '@page/register'
import Member from '@page/member'

const AuthRoute = (props) => {
    const { isLogin, setIslogin } = props;
    const [pass, setPass] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('__mock_token__');
        fetch('/api/authentication', {
            method: 'get',
            headers: new Headers({
                'Content-Type': 'application/json',
                'AUTHENTICATION_TOKEN': token
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            if (res.success) {
                setIslogin(true);
                // setPass(true);
                console.log(token,'token')
            } else {
                setIslogin(false);
                console.log(res.message);
                // setPass(true);
            }
            // console.log('success',pass)
        }).catch((error) => {
            console.log('Error:', error)
        })
    },[])
    return <Route path={'/'} render={() => {
        return isLogin
            ? <Member />
            : <Redirect to="/login" />
    }} />

}

// const AuthRoute = (props) => {
//     const { isLogin, setIslogin } = props;
//     useEffect(() => {
//         const token = localStorage.getItem('AUTHENTICATION_TOKEN');
//         fetch('/api/authentication', {
//             method: 'get',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'AUTHENTICATION_TOKEN': token
//             })
//         }).then((res) => {
//             return res.json()
//         }).then((res) => {
//             if (res.success) {
//                 setIslogin(true);
//             } else {
//                 setIslogin(false);
//                 alert(res.message)
//             }

//         }).catch((error) => {
//             console.log('Error:', error)
//         })
//     }, [])


//     return <Route path={'/member'} render={() => {
//         return isLogin
//             ? <Member />
//             : <Redirect to="/login" />
//     }} />
// }

export default AuthRoute;