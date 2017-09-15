import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';

import LinksList from './LinksList'

export default class Lnk extends React.Component{
    componentWillMount() {
        if ( !Meteor.userId() ) {
            this.props.browserHistory.replace('/');
        }
    }
    onLogout() {
        Accounts.logout();
    }
    onSubmit(e){
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url){
            Links.insert({ url: url, userId: Meteor.userId() });
            this.refs.url.value = '';
        };
    }
    render() {
        return (
            <div>
                <h1>Your Links</h1>
                <button onClick={this.onLogout.bind(this)}>Cerrar Sesión</button>
                <LinksList />
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type='text' ref='url' placeholder='URL'/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
};