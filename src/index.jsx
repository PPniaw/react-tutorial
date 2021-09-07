// main.jsx
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Login from './pages/login'
import Register from './pages/register'
import Member from './pages/member'
import App from './App.jsx'
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";


function PrivateRoute(props){
  const { path,component } = props
  fetch('/api/authentication',{
    method:'get',
  }).then((res) => {
    return res.json()
  }).then((res) => {
    console.log(res)
    if(res.success){
      return <Route path={path} component={component} />
    }else{
      alert(res.message)
      return <Redirect to="/" />
    }
    
  }).catch((error) =>{
    console.log('Error:', error)
  })

  // 測試
  // const { path,component } = props
  // const isLogin = localStorage.getItem("__mock_token__") ? true : false;
  // console.log(isLogin)
  // return isLogin ? (
  //   <Route path={path} component={component} />
  // ) : (
  //   <Redirect to="/" />
  // );
}

export default PrivateRoute;

setupMSW().then(() =>
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <PrivateRoute path="/member" component={Member} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>, document.getElementById('root'))
)

