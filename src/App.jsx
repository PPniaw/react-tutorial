// import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import Login from '@page/login'
import Register from '@page/register'
import Member from '@page/member'
import Loading from "@components/loading";
import { createStore } from "redux";
import reducer from "@store/reducer";
// import AuthRoute from '@components/authRouth';
import publicRoutes from '@routes/publicRoutes'
// import Routers from './router'
import { useSelector, useDispatch } from 'react-redux';

const store = createStore(reducer);
const AuthRoute = (props) => {
  const { isLogin, setIslogin } = props;
  const token = localStorage.getItem('Authorization');
  const history = useHistory()
  const dispatch = useDispatch();

  const fetchUsername = useCallback(
    () => dispatch({
      type: 'FETCH_USERNAME',
      username: data.username
    }),
    [dispatch]
  );
  const fetchName = useCallback(
    () => dispatch({
      type: 'FETCH_NAME',
      name: data.name
    }),
    [dispatch]
  );
  const fetchRole = useCallback(
    () => dispatch({
      type: 'FETCH_ROLE',
      role: data.role
    }),
    [dispatch]
  );
  const fetchLink = useCallback(
    () => dispatch({
      type: 'FETCH_LINK',
      imgLink: data.imgLink
    }),
    [dispatch]
  );
  const fetchToken = useCallback(
    () => dispatch({
      type: 'FETCH_TOKEN',
      token: data.token
    })
  )
  const [data, setData] = useState({
    username: 'aaa',
    name: '333',
    role: '',
    imgLink: '',
    token: token,
  })

  useEffect(() => {
    fetchApiUser()
  }, [])
  const fetchApiUser = () => {
    fetch('https://l8-upgrade-apis.vercel.app/api/user', {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if (res.success) {
        setIslogin(true);
        setData(data.username = res.data.username)
        setData(data.name = res.data.name)
        setData(data.role = res.data.role)
        setData(data.imgLink = res.data.imgLink)
        console.log('把name裝進去', data.name)
        fetchUsername()
        fetchName()
        fetchRole()
        fetchLink()
        fetchToken()
        return isLogin
      } else {
        setIslogin(false);
        alert('權限不足')
        history.push('/login')
        return isLogin
      }
    }).catch((error) => {
      console.log('Error:', error)
    })
    return isLogin
  }

  return <Route path={'/'} render={() => {
    return token
      ? isLogin ? <Member /> : <Loading />
      : <Redirect to="/login" />
  }} />

}


function App() {
  const [isLogin, setIslogin] = useState(false);

  return <HashRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" exact component={() => <Login setIslogin={setIslogin} />} />
      {/* <Route path="/" exact component={Member} /> */}
      <AuthRoute isLogin={isLogin} setIslogin={setIslogin} />
    </Switch>
  </HashRouter>
}

// function App(props) {
//   const [isLogin, setIslogin] = useState(false);

//   return <HashRouter>
//     <Switch>
//     {publicRoutes.map(
//           ({path, component, ...rest}) => 
//           <Route key={path} path={path} {...rest} render={() => {
//             const Component = component;
//             return (
//               <Component setIslogin={setIslogin}/>
//             )
//           }}/>
//         )}
//         <AuthRoute isLogin={isLogin} setIslogin={setIslogin} />
//     </Switch>
//   </HashRouter>
// }

export default App;
