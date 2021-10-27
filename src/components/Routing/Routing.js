import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from '../Home/Services/Services';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
const Routing = () => {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Services />
            </Route>
            <Route path="/home">
              <Services />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
};

export default Routing;