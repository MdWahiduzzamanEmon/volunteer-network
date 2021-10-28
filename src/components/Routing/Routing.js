import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from '../Home/Services/Services';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import VolunteerRegister from '../Form/VolunteerRegister/VolunteerRegister';
import PrivateRoute from '../Private/PrivateRoute';
import MyEvents from '../MyEvents/MyEvents'
import Admin from '../Admin/Admin';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
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
            <Route path="/blog">
              <Blog />
            </Route>
            <PrivateRoute path="/service/:ServiceId">
              <VolunteerRegister />
            </PrivateRoute>
            <PrivateRoute path="/myevents">
              <MyEvents />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
};

export default Routing;