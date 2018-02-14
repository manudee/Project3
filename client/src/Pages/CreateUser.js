import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardText } from 'material-ui/Card';
/*import RaisedButton from 'material-ui/RaisedButton';*/
/*import TextField from 'material-ui/TextField';*/
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SaveBtn } from "../components/Button/SaveBtn.js";
class CreateUser extends Component {

    state = {
        username: "",
        password: "",
        role: "",
        isredirect: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    /*handleFormSubmit = event => {
     event.preventDefault();

     var username=this.state.username;
     var password=this.state.password;
     var role= this.state.role;
    

     var userInfo = {}
     userInfo.username = username;
     userInfo.password = password;
     userInfo.role = role;
   

     console.log(userInfo);

     API.createUser(userInfo)
     .then(res => this.setState(this.setState({
         username: "", 
         password: "",
         Role: ""
     })))
     .then(() => this.setState({isredirect:true}))
     .catch(err => console.log("error is " + err));

    }*/

    cancel = () =>{
        this.setState({isredirect:true})
    }
    handleFormSubmit = event => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        // this.setState({url:"userlist"});
        // create a string for an HTTP body message
        const username = encodeURIComponent(this.state.username);
        // const role = encodeURIComponent(this.state.role);
        const password = encodeURIComponent(this.state.password);


        const formData = {};
        formData.username = username;
        // formData.role = role;
        formData.password = password;

        console.log(formData);

        API.createUser(formData)
            .then(res => this.setState(this.setState({
                username: "",
                password: ""
            })))
            .catch(err => console.log("error is " + err));


        // // create an AJAX request
        // const xhr = new XMLHttpRequest();
        // xhr.open('post', '/createuser');
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhr.responseType = 'json';
        // xhr.addEventListener('load', () => {
        //     if (xhr.status === 200) {
        //         // success

        //         // change the component-container state
        //         this.setState({
        //             errors: {}
        //         });

        //         // set a message
        //         localStorage.setItem('successMessage', xhr.response.message);

        //         // redirect user after sign up to login page
        //         this.props.history.push('/user');
        //     } else {
        //         // failure

        //         const errors = xhr.response.errors ? xhr.response.errors : {};
        //         errors.summary = xhr.response.message;

        //         this.setState({
        //             errors
        //         });
        //     }
        // });
        // xhr.send(formData);
    }




    render() {
        return (
            <div>
                <Container>
                    <form>
                        <Title>UserName</Title>
                        <Input name="username" placeholder="UserName" value={this.state.username} onChange={this.handleInputChange} />
                        <Title>Password</Title>
                        <Input name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        <Title>Role</Title>
                        <Input name="role" placeholder="Role" value={this.state.role} onChange={this.handleInputChange} />
                        <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>
                        <br />
                        <br />
                        <FormButton onClick={this.cancel}>Cancel</FormButton>
                    </form>

                    {this.state.isredirect ? (<Redirect to={{ pathname: "/userlist", state: this.state }} />) : null}
                </Container>
            </div>
        )
    }

}

export default CreateUser;