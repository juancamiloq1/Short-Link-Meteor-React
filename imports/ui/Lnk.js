import React from 'react';
import { Meteor } from 'meteor/meteor';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class Lnk extends React.Component{
    componentWillMount() {
        if ( !Meteor.userId() ) {
            this.props.browserHistory.replace('/');
        }
    }
    render() {
        return (
            <div>
                <PrivateHeader title='Tus Links'/>
                <div className='page-content'>
                    <LinksListFilters/>
                    <AddLink />
                    <LinksList />
                </div>
            </div>
        );
    }
}