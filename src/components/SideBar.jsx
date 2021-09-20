import '@style';
import { useEffect, useState } from 'react/cjs/react.development';
import routes from '../routes';
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const SideBar = (props) => {
    const showSideBar = useSelector((state) => state.showSideBar)
    const location = useLocation();
    const currentPage = location.pathname;
    return (
        <div className="tabBox">
            <div className={`list ${showSideBar ? null : 'listClose'}`}>
                {routes.privateRoutes.map(route => (
                    <Link key={route.path} to={route.path}>
                        <div key={route.name} className={ currentPage === route.path ? 'active' : null }>
                            {route.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SideBar;