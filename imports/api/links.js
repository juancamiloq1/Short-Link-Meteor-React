import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Links = new Mongo.Collection('links');

if( Meteor.isServer ) {
    Meteor.publish('links', function() {  // links es el name no es la collection
        return Links.find( { userId: this.userId });  // query para solo mostrar links de cada user
    });                                               // Se usa this.userId en vez de usar Meteor.userId
}                                                     // Meteor team tomo esta decision.
