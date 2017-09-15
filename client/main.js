import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Tracker.autorun( () => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});


Meteor.startup( () => {
  Meteor.call('greetUser', 'Juanca', (err, res) => {
    console.log('Greet User Arguments', err, res);
  });
  Meteor.call('addNumbers', 4, 4, (err, res) => {
    console.log('Add Numbers Arguments', err, res);
  });
  ReactDOM.render(routes, document.getElementById('app'));
});