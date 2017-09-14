import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Tracker } from 'meteor/tracker';

import Signup from './../imports/ui/Signup';
import Lnk from './../imports/ui/Lnk';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const browserHistory = createHistory();
window.browserHistory = browserHistory;

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];
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

Tracker.autorun( () => {
  const isAuthenticated = !!Meteor.userId();
  const pathName = browserHistory.location.pathname;
  const isUnauthenticatedPages = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPages = authenticatedPages.includes(pathName);
  console.log('Is Authenticated', isAuthenticated);

  if( isUnauthenticatedPages && isAuthenticated ) {
    browserHistory.push('/links');
    //redirecto links
  } else if ( isAuthenticatedPages && !isAuthenticated ) {
    // redirect to /
    browserHistory.push('/');
  }
});


Meteor.startup( () => {
  ReactDOM.render(routes, document.getElementById('app'));
});