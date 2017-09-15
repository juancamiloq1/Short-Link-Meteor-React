import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Links = new Mongo.Collection('links');

if( Meteor.isServer ) {
    Meteor.publish('links', () => {  // links es el name no es la collection
        return Links.find( { url: '4' });  // Aqui se pone el query para solo mostrar los links de cada user
    });
}
