import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        developers:[]
    }
  }

  componentDidMount=()=>{
    fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
    .then(res=>res.json())
    .then(devs=>this.setState({developers:devs}))
    .catch(error=>console.log("This error occured: "+error));
  }

  render(){
    return (
        <Router>
          <Navbar />
          <Switch >
            <Route exact path="/" ><Home /></Route>
            <Route path="/bios" ><DisplayBios developers={this.state.developers}/></Route>
            <Route path="/create-bio" ><AddDeveloper /></Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
