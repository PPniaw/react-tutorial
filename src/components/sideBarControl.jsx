import Hamburger from "@image/hamburger.svg";
import '@style';
import { useEffect, useState } from "react";

function SideBarControl(props) {
    const [leftShow, setLeftShow] = useState(true)
    useEffect(()=>{
        console.log('SideBarControl leftShow',leftShow)
    })
    const handleSideBar = () => {
        if (!leftShow) {
            setLeftShow(true)
        } else {
            setLeftShow(false)
        }
    }
    return (
        <div className="icon-hamburger" onClick={handleSideBar}>
            <img src={Hamburger} />
        </div>
    )
};
export default SideBarControl;