import React from "react";
import ReactDOM from "react-dom";

//import App from './App';
import Home from "./Home/Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";


       
ReactDOM.render(


<BrowserRouter>
<Switch>

  <Route exact path ="/" component = {Home} />
  <Route path ="/signup" component = {Signup} />
  <Route path ="/login" component = {Login} />
  <Route  component = {Home} />
</Switch>
   


</BrowserRouter>
,
document.getElementById("root")
);
