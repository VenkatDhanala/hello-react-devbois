import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Developer from '../models/Developer';
import devActions from '../reducers/devBios';
import '../styles/AddDeveloper.css';


class AddDeveloper extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            favoriteLanguage: '',
            yearStarted:null,
            validForm:false
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let isValid = this.validateForm();

        this.setState((state)=>({
            [name]:value,
            validForm: isValid
        }))
    }

    validateForm = () => {
        let firstNameValid = this.state.firstName ? true : false;
        let lastNameValid = this.state.lastName ? true : false;
        let favoriteLanguageValid = this.state.favoriteLanguage ? true : false;
        let yearStartedValid = this.state.yearStarted ? true : false;

        return firstNameValid && lastNameValid && favoriteLanguageValid && yearStartedValid;
    }

    submitForm = (event) => {
        event.preventDefault();
        if(!this.validateForm())
            return;

        let dev = new Developer(
            null,
            this.state.firstName,
            this.state.lastName,
            this.state.favoriteLanguage,
            this.state.yearStarted
        );
        fetch("https://tech-services-1000201953.uc.r.appspot.com/developer",
            {
                method: 'POST',
                body: JSON.stringify(dev),
                headers: {'Content-Type':'application/json'}
            }
        )
        .catch(error=>console.log(error));

        this.props.addDeveloper(dev);
        this.clearForm();
    }

    clearForm = () => {
        this.setState({
            firstName:'',
            lastName:'',
            favoriteLanguage:'',
            yearStarted: null,
            validForm:false
        });
        document.getElementById('devForm').reset();
        this.props.history.push('/bios');
    }

    render() {
        return (
            <div className="container">
                <h1>Add New Developer Bio</h1>
                <div className="row">
                    <div className="col-mid-6">
                        <form onSubmit={this.submitForm} id="devForm">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="favortieLanguage">Favorite Dev Language</label>
                                <input type="text" name="favoriteLanguage" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearStarted">Year Started</label>
                                <input type="text" name="yearStarted" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <button  type="submit" className="btn btn-success" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    (this.state.validForm)
                    ?
                        <div id="errorMessage"></div>
                    :
                        <div id="errorMessage">All fields must be filled out</div>
                }
            </div>
        )
    }
}

export default connect(({developers})=>({
    developers:developers
}),{
    addDeveloper: devActions.addBioActionCreator
})(withRouter(AddDeveloper));
