import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../style.css';
function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [tip, setTip] = useState({ show: false, message: '' })
    const history = useHistory()
    const editUsername = (e) => {
        setUsername(e.target.value);
        console.log("帳號改變", e.target.value)
    }
    const editPassword = (e) => {
        setPassword(e.target.value);
        console.log("密碼改變", e.target.value)
    }
    const editCheckPassword = (e) => {
        setCheckPassword(e.target.value)
    }
    // checkPassword有值的時候隱藏tip
    useEffect(() => {
        if(checkPassword){
            setTip({show:false,message:''})
        }
    },[checkPassword])

    const handleRegister = (event) => {
        if (!checkPassword) {
            return setTip({ show: true, message: '確認密碼不能為空' })
        }
        if(checkPassword !== password){
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
                history.push("/");
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
                        <span>帳號</span><input value={username} type="text" onChange={editUsername}></input>
                    </div>
                    <div className="input_box input_box_password">
                        <span>密碼</span><input type="text" value={password} onChange={editPassword}></input>
                    </div>
                    <div className="input_box input_box_surePassword">
                        <span>確認密碼</span><input type="text" value={checkPassword} onChange={editCheckPassword}></input>
                    </div>
                </div>
                <button className="btn" onClick={handleRegister}>註冊</button>
                {tip.show && <span>{tip.message}</span>}
                <Link to="/">返回登入</Link>
            </div>
        </div>
    )
}

export default Register;