import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Lnk extends React.Component{
    componentWillMount() {
        if ( !Meteor.userId() ) {
            this.props.browserHistory.replace('/');
        }
    }
    onLogout() {
    Accounts.logout();
    }
    render() {
        return (
            <div>
                <h1>Your Links</h1>
                <button onClick={this.onLogout.bind(this)}>Cerrar Sesión</button>
            </div>
        );
    }
};