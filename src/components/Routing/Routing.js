import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from '../Home/Services/Services';
const Routing = () => {
    return (
      <div>
        <Router>
          <Header></Header>
                <Switch>
                    <Route>
                        <Services/>
                    </Route>
          </Switch>
        </Router>
      </div>
    );
};

export default Routing;