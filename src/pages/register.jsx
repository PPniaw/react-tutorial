import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../style.css';
function Register(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [checkPassword,setCheckPassword] = useState('')
    function editUsername(e){
        setUsername(e.target.value);
        console.log("帳號改變",e.target.value)
    }
    function editPassword(e){
        setPassword(e.target.value);
        console.log("密碼改變",e.target.value)
    }
    function editCheckPassword(e){
        setCheckPassword(e.target.value)
    }
    useEffect(() => {
        setUsername(username);
        setPassword(password);
    })
    function handleRegister(){
        fetch('/api/register',{
            method:'post',
            body:JSON.stringify({username:username.username,password:password.password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(function(res){
            console.log(res.status)
        }).catch(
            error => console.error('Error:', error)
        )
    }
    return(
        <div className="box register_box">
            <div className="content">
                <h1>註冊</h1>
                <form>
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
                <button type="submit" className="btn" onClick={handleRegister}>註冊</button>
                </form>
                <Link to="/login">返回登入</Link>
            </div>
        </div>
    )
}

export default Register;