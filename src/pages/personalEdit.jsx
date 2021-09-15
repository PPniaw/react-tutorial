import { useEffect, useState } from "react";
import '@/style.css'
import { useSelector, useDispatch } from 'react-redux';

function PersonalEdit(){
    const username = useSelector((state) => state.username)
    const name = useSelector((state) => state.name)
    // fetch(`https://l8-upgrade-apis.vercel.app/api/users/${username}`)
    console.log("name",name)
    console.log("username",username)


    return (
    <div>
        <div>帳戶設定</div>
        <div></div>
        <span>{name}</span><span>{username}</span>
        <button>上傳圖片</button>
    </div>
    )
}

export default PersonalEdit;