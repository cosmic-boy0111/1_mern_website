import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          
          <Home />
        </Route>
        <Route exact path="/about">
          
          <About />
        </Route>
        <Route exact path="/contact">
          
          <Contact />
        </Route>
        <Route exact path="/login">
          
          <Login />
        </Route>
        <Route exact path="/signup">
          
          <Signup />
        </Route>
      </Switch>
    </>
  );
};

export default App;
