import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TaskManager from './TaskManager/TaskManager';
import UserPage from './User/User';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={TaskManager}/>
      <Route path="/user/:id" component={UserPage}/>
    </Switch>
  );
};

export default Routes;