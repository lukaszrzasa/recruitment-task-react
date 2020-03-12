import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WelcomePage from './Welcome/Welcome';
import UserPage from './User/User';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={WelcomePage}/>
      <Route path="/user/:id" component={UserPage}/>
    </Switch>
  );
};

export default Routes;