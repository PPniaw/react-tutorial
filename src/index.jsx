// main.jsx
import { useState, useEffect } from 'react';
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Member from '@page/member'
import App from '@/App'
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'
import { HashRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";

// const App = () => {
//   const [isLogin, setIslogin] = useState(false);

//   return <HashRouter>
//     <Switch>
//       <Route path="/register" component={Register} isLogin={isLogin} />
//       <Route path="/login" exact component={() => <Login isLogin={isLogin} setIslogin={setIslogin} />} />
//       <AuthRoute isLogin={isLogin} setIslogin={setIslogin} />
//     </Switch>
//   </HashRouter>
// }

setupMSW().then(() =>
  ReactDOM.render(
    <App />, document.getElementById('root'))
)

