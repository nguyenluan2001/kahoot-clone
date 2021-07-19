import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './pages/signUp/SignUp';
import Login from "./pages/login/Login"
import AuthProvider from "./context/AuthContext"
import Discover from './pages/discover/Discover';
import PrivateRoute from './components/PrivateRoute';
import Me from './pages/me/Me';
import Create from './pages/create/Create';
import Challenge from './pages/challenge/Challenge';
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/sign-up" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/me/creator" exact component={Create}>
            </PrivateRoute>
            <PrivateRoute path="/me/edit/:id" exact component={Create}>
            </PrivateRoute>
            <PrivateRoute path="/me"  component={Me}></PrivateRoute>
            <Route path="/challenge/:id" component={Challenge}></Route>
            {/* <Route path="/me/creator" exact component={Create}></Route>
            <Route path="/me" component={Me}></Route> */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
