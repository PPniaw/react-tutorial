import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import '@/style.css';

function Login() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const editUsername = (e) => {
        setUsername(e.target.value);
    }
    const editPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        fetch('https://l8-upgrade-apis.vercel.app/api/login', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            if (res.success) {
                localStorage.setItem('Authorization', res.token);
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