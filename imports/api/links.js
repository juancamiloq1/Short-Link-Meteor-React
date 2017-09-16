import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if( Meteor.isServer ) {
    Meteor.publish('links', function() {  // links es el name no es la collection  // cambiamos de arrow a function porque se necesita acceso a this.userId
        return Links.find( { userId: this.userId });  // query para solo mostrar links de cada user
    });                                               // Se usa this.userId en vez de usar Meteor.userId
}                                                     // Meteor team tomo esta decision.


Meteor.methods({
   'links.insert'( url ) {
        if ( !this.userId ) {
            throw new Meteor.Error( 'no-autorizado' );
        }
        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({ url: url });

        Links.insert({
            _id: shortid.generate(),
            url: url,
            userId: this.userId,
            visible: true
        });
   },
   'links.setVisibility'( _id , visible ){
        if ( !this.userId ){
            throw new Meteor.Error( 'No-estas-autorizado' );
        }
        new SimpleSchema({
            _id: {
                type: String,
                min: 1
            },
            visible: {
                type: Boolean
            }
        }).validate({ _id: _id, visible: visible });

        Links.update({
            _id: _id,
            userId: this.userId
        }, {
            $set: {
                visible: visible
            }
        });
   }
});
