import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Links = new Mongo.Collection('links');

if( Meteor.isServer ) {
    Meteor.publish('links', function() {  // links es el name no es la collection  // cambiamos de arrow a function porque se necesita acceso a this.userId
        return Links.find( { userId: this.userId });  // query para solo mostrar links de cada user
    });                                               // Se usa this.userId en vez de usar Meteor.userId
}                                                     // Meteor team tomo esta decision.


Meteor.methods({
    // Ejemplos Methods
    greetUser(name) {
        console.log('greetUser esta corriendo...');

        if(!name){
            throw new Meteor.Error('invalid-arguments', 'Name is Undefined');
        }
        return `Hello User! ${name}`;
    },
    addNumbers( x, y ){
        if( typeof x !== 'number' || typeof y !== 'number' ){
            throw new Meteor.Error('argumentos-invalidos', 'Deben ser los dos numeros');
        }
        return x + y;
    }
});