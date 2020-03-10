import React from 'react';
import {Route, Switch} from "react-router-dom";
import WelcomePage from "./Welcome/Welcome";

const Routes = () => {
  return (
    <Switch>
      <Route to="/" exact component={WelcomePage}/>
      <Route to="/user/:id" component={WelcomePage}/>
    </Switch>
  );
};

export default Routes;