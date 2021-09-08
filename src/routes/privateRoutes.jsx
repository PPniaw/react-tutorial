import Login from '@page/login'
import Register from '@page/register'
import Member from '@/page/member'

const privateRoutes = [
    {
        path:'/',
        component:Member,
        exact:true,
        backUrl:'/login'
    },
];

export default privateRoutes;