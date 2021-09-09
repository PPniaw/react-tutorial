// import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from '@page/login'
import Register from '@page/register'
import Member from '@page/member'
// import AuthRoute from '@components/authRouth';
import publicRoutes from '@routes/publicRoutes'
// import Routers from './router'

const AuthRoute = (props) => {
  const { isLogin, setIslogin } = props;
  useEffect(() => {
    const token = localStorage.getItem('__mock_token__');
    fetch('https://l8-upgrade-apis.vercel.app/api/user', {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if (res.success) {
        setIslogin(true);
      } else {
        setIslogin(false);
        alert(res.message)
      }

    }).catch((error) => {
      console.log('Error:', error)
    })
  }, [])


  return <Route path={'/'} render={() => {
    return isLogin
      ? <Member />
      : <Redirect to="/login" />
  }} />
}


function App() {
  const [isLogin, setIslogin] = useState(false);

  return <HashRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" exact component={() => <Login setIslogin={setIslogin} />} />
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
