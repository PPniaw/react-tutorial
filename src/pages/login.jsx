import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../style.css';
function Login() {
    return (
        <div className="box login_box">
            <div className="content">
                <h1>登入</h1>
                <div>
                    <div className="input_box input_box_account">
                        <span>帳號</span><input type="text"></input>
                    </div>
                    <div className="input_box input_box_password">
                        <span>密碼</span><input type="password"></input>
                    </div>
                </div>
                <Link to="/register">註冊</Link>
                <button type="submit">登入</button>
            </div>
        </div>
    )
}
export default Login;