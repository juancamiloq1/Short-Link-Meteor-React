import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from './../imports/ui/Signup';
import Lnk from './../imports/ui/Lnk';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const browserHistory = createHistory();
window.browserHistory = browserHistory;
const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Lnk}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);

Meteor.startup( () => {
  ReactDOM.render(routes, document.getElementById('app'));
});