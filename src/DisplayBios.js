import React, { Component } from 'react'
import Developer from './Developer';
import DeveloperBio from './DeveloperBio';

export class DisplayBios extends Component {
    constructor(props){
        super(props);
        this.state = {
            developers:[
                new Developer(1,"Jason","Monroe","JavaScript",2006),
                new Developer(2,"Bill","Gates","BASIC",1970) 
            ]
        }
    }
    render() {
        return (
            this.state.developers.map(
                (dev) => <DeveloperBio key={dev.id} developer={dev} />
            )
        );
    }
}

export default DisplayBios;
