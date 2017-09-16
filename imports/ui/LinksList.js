import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { Links } from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }
    componentDidMount() {
        console.log('ComponentDidMount LinksList');
        this.linksTracker = Tracker.autorun( () => {
            Meteor.subscribe('links'); // links es el nombre de la publication
            const links = Links.find( { visible: Session.get('showVisible') } ).fetch();
            this.setState( { links: links } );
        });
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount LinksList');
        this.linksTracker.stop();
    }
    renderLinksListItems() {
        if (Links.lenght === 0){
            return <h3>Añade un Link para comenzar</h3>;
        } else {
            return this.state.links.map( (link) => {
                const shortUrl = Meteor.absoluteUrl(link._id);
                return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>
               // return <p key={link._id}>{link.url}</p>;
            });
        }
    }
    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}