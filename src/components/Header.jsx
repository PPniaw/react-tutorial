import Hamburger from "@image/hamburger.svg";
import { useSelector, useDispatch } from 'react-redux';
import { setShowSideBar } from '../store/reducer';

const Header = () => {
    const dispatch = useDispatch();
    const imgLink = useSelector((state) => state.imgLink)
    const username = useSelector((state) => state.username)
    const name = useSelector((state) => state.name)
    const showSideBar = useSelector((state) => state.showSideBar)
    const toggleSideBar = () => dispatch(setShowSideBar(!showSideBar));

    return (
        <div className="header">
            <div className="left">
                <div className="logo">LOGO</div>
                <div className="icon-hamburger" onClick={toggleSideBar}>
                    <img src={Hamburger} />
                </div>
            </div>
            <div className="loginPanel">
                <div className="photo">
                    <img src={imgLink}></img>
                </div>
                <span>{name}</span>
                <span>({username})</span>
            </div>
        </div>
    )
}

export default Header;