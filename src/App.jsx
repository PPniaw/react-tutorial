// import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from '@page/login'
import Register from '@page/register'
import Loading from "@components/loading";
import 'antd/dist/antd.css';
import routes from "./routes";
import useAuth from "./hook/auth";

function App() {
  const { isLogin, isLoading } = useAuth();
  if (isLoading) return <Loading />;
  return <HashRouter>
    <Switch>
      {/* TODO: 改用publicRoutes */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      {routes.privateRoutes.map((route, index) => {
        if (isLogin) return <Route key={index} path={route.path} exact={route.exact} component={route.component} />
        else return <Redirect to={route.backUrl} />
      })}
    </Switch>
  </HashRouter>
}

export default App;