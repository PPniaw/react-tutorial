import { HashRouter as Router, Route, Link } from "react-router-dom";
import '@style';
import PersonalEdit from "@page/personalEdit";
import Administrator from "@page/administrator";
import Home from "@page/home"
import Tab from "../components/tab";
const tabSet = {
    '首頁':<Home/>,
    '個人資訊管理':<PersonalEdit/>,
    '會員管理':<Administrator/>,
}
function Member() {
    return (
        <div className="member">
            <div className="header">
                <div className="left">
                    <div>LOGO</div>
                    <button>控制側邊欄</button>
                </div>
                <div className="loginPanel">資訊、通知...</div>
            </div>
            <div className="main-index">
                {/* <div className="sideBar">側邊欄</div>
                <div className="index"></div> */}
                <Tab tabSet={tabSet} />
            </div>
        </div>
    )
}
export default Member;