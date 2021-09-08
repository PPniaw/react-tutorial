import Login from '@page/login'
import Register from '@page/register'

const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
    }
];
export default publicRoutes;