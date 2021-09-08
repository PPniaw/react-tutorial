import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '@style';
function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [tip, setTip] = useState({ show: false, message: '' })
    const [mailWrong,setmailWrong] = useState({ show: false, message: '' })
    const [passwordWrong,setPasswordWrong] = useState({ show: false, message: '' })
    const history = useHistory()
    const editUsername = (e) => {
        setUsername(e.target.value);
        // console.log("帳號改變", e.target.value)
    }
    const editPassword = (e) => {
        setPassword(e.target.value);
        // console.log("密碼改變", e.target.value)
    }
    const editCheckPassword = (e) => {
        setCheckPassword(e.target.value)
    }
    // checkPassword有值的時候隱藏tip
    useEffect(() => {
        if (checkPassword) {
            setTip({ show: false, message: '' })
        }
    }, [checkPassword])

    const handleRegister = () => {
        if (!checkPassword) {
            return setTip({ show: true, message: '確認密碼不能為空' })
        }
        if (checkPassword !== password) {
            return setTip({ show: true, message: '確認密碼有誤' })
        }
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
            if (res.success) {
                console.log('成功跳轉首頁', res.message)
                alert('註冊成功請重新登入')
                history.push("/login");
            } else {
                alert(res.message)
                console.log('註冊失敗原因:', res.message)
            }
        }).catch((error) => {
            console.log('Error:', error)
        })
    }
    return (
        <div className="box register_box">
            <div className="content">
                <h1>註冊</h1>
                <div>
                    <div className="input_box input_box_account">
                        <span>帳號</span><input value={username} type="text" onChange={editUsername} placeholder="必須是信箱"></input>
                    </div>
                    <div className="input_box input_box_password">
                        <span>密碼</span><input type="password" value={password} onChange={editPassword} placeholder="4-8字元;首尾必須是英文;中間必須是數字"></input>
                    </div>
                    <div className="input_box input_box_surePassword">
                        <span>確認密碼</span><input type="password" value={checkPassword} onChange={editCheckPassword} placeholder="4-8字元;首尾必須是英文;中間必須是數字"></input>
                        {tip.show && <p className="tip">{tip.message}</p>}
                    </div>
                </div>
                <button className="btn" onClick={handleRegister}>註冊</button>
                <Link to="/login">返回登入</Link>
            </div>
        </div>
    )
}

export default Register;