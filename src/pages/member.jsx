import { HashRouter as Router, Route, Link } from "react-router-dom";
import '@style';
import PersonalEdit from "@page/personalEdit";
import Administrator from "@page/administrator";
import Home from "@page/home"
import Tab from "@components/tab";
import SideBarControl from "@components/sideBarControl";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Hamburger from "@image/hamburger.svg";
// const tabSet = {
//     '首頁': <Home />,
//     '個人資訊管理': <PersonalEdit />,
//     '會員管理': <Administrator />,
// }
function Member(props) {
    const imgLink = useSelector((state) => state.imgLink)
    const username = useSelector((state) => state.username)
    const name = useSelector((state) => state.name)
    const [leftShow, setLeftShow] = useState(true)
    const handleSideBar = () => {
        if (!leftShow) {
            setLeftShow(true)
        } else {
            setLeftShow(false)
        }
    }

    // TAB
    const tabSet = {
        '首頁': <Home />,
        '個人資訊管理': <PersonalEdit />,
        '會員管理': <Administrator />,
    }
    const arr = Object.keys(tabSet)
    const [selected, setSelected] = useState(arr[0]) // 當前選中的tab標籤
    const [needAdmin, setNeedAdmin] = useState(false)
    // useEffect(() => {
    //     console.log("member leftShow", leftShow)
    // })
    function select(item) {
        setSelected(item)
    }
    return (
        <div className="member">
            <div className="header">
                <div className="left">
                    <div className="logo">LOGO</div>
                    <div className="icon-hamburger" onClick={handleSideBar}>
                        <img src={Hamburger} />
                    </div>
                    {/* <SideBarControl /> */}
                </div>
                <div className="loginPanel">
                    <div className="photo">
                        <img src={imgLink}></img>
                    </div>
                    <span>{name}</span>
                    <span>({username})</span>
                </div>
            </div>
            <div className="main-index">
                {/* <Tab tabSet={tabSet} /> */}
                <div className="tabBox">
                    <div className={leftShow ? 'list' : 'list listClose'}>
                        {arr.map((item, index) => (
                            <div
                                key={item}
                                className={`${item === selected ? 'active item' : 'item'} item-${index}`}
                                onClick={() => select(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    {tabSet[selected]}
                </div>
            </div>
        </div>
    )
}
export default Member;