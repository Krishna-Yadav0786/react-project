import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Login from "./Component/Login";
import "./style.css";


const App = ()=>{
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
    
  );

}

ReactDOM.render(<App />,document.getElementById("root"));