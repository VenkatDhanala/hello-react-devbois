import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Developer from './Developer';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        developers:[
            new Developer(1,"Jason","Monroe","JavaScript",2006),
            new Developer(2,"Bill","Gates","BASIC",1970) 
        ]
    }
  }

  addDeveloper = (dev) => {
    dev.id = this.state.developers.length + 1;
    let newDevs = [...this.state.developers,dev];
    this.setState({developers:newDevs});
  }

  render(){
    return (
        <Router>
          <Navbar />
          <Switch >
            <Route exact path="/" ><Home /></Route>
            <Route path="/bios" ><DisplayBios developers={this.state.developers}/></Route>
            <Route path="/create-bio" ><AddDeveloper addDeveloper={this.addDeveloper}/></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
