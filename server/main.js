import { Meteor } from 'meteor/meteor';

import '../imports/api/users';   //Solo necesitamos que se ejecute (Validacion de users)
import '../imports/api/links';
import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
  // code to run on server at startup
  
});
