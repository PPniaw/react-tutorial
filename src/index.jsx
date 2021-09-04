// main.jsx
import { setupMSW } from './mocks/browser'
import ReactDOM from 'react-dom'
import Login from './pages/login'
import Register from './pages/register'
import App from './App.jsx'
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'

import { BrowserRouter as Router, Route } from "react-router-dom";


// setupMSW().then(() => 初始化APP)
// setupMSW().then(() =>
//   ReactDOM.render(
//     <Router>
//     <Route path="/" component={Login}>
//       {/* <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox} /> */}
//     </Route>
//   </Router>, document.getElementById('root'))
// )

// const routeConfig = [{
//   path: "/login",
//   component: Login
// },
// {
//   path: "/register",
//   component: Register
// },]

setupMSW().then(() =>
  ReactDOM.render(
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>, document.getElementById('root'))
)

// setupMSW().then(() =>
//   ReactDOM.render(
//   <Router routes={routeConfig}/>, document.getElementById('root'))
// )
