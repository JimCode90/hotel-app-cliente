import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";




function App() {
  return (
    <BrowserRouter>
        <TopNav />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
