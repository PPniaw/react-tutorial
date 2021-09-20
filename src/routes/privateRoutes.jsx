// import Login from '@page/login'
// import Register from '@page/register'
// import Member from '../pages/member';
import PersonalEdit from "@page/personalEdit";
// import Administrator from "../pages/administrator";
import Admin from '../pages/admin';
import Home from "@page/home"

const privateRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        backUrl: '/login',
        name: '首頁'
    },
    {
        path: '/personalEdit',
        component: PersonalEdit,
        exact: true,
        backUrl: '/login',
        name: '個人資訊管理'
    },
    {
        path: '/administrator',
        component: Admin,
        exact: true,
        backUrl: '/login',
        name: '管理者中心'
    },
];

export default privateRoutes;