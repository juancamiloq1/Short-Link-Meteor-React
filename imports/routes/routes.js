import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from './../ui/Signup';
import Lnk from './../ui/Lnk';
import Login from './../ui/Login';
import NotFound from './../ui/NotFound';

const browserHistory = createHistory();
window.browserHistory = browserHistory;

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
    const pathName = browserHistory.location.pathname;
    const isUnauthenticatedPages = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPages = authenticatedPages.includes(pathName);
    console.log('Is Authenticated', isAuthenticated);
  
    if( isUnauthenticatedPages && isAuthenticated ) {
      //redirecto links
      browserHistory.replace('/links');
    } else if ( isAuthenticatedPages && !isAuthenticated ) {
      // redirect to /
      browserHistory.replace('/');
    }
};

export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/links" component={Lnk}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);