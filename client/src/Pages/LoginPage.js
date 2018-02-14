import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import LoginForm from '../components/Login/LoginForm.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from '../utils/API';

class LoginPage extends Component {

    constructor(props, context) {
        super(props, context);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                username: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }


    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();

        // create a string for an HTTP body message
        const username = encodeURIComponent(this.state.user.username);
        const password = encodeURIComponent(this.state.user.password);


        const formData = {};
        formData.username = username;
        formData.password = password;

        console.log("MyData")
        console.log(formData);


          API.login(formData)
            .then(res => this.setState(this.setState({
                username: "",
                password: ""
            })))
            .catch(err => console.log("error is " + err));

        // create an AJAX request
        // const xhr = new XMLHttpRequest();
        // xhr.open('post', '/');
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhr.responseType = 'json';
        // xhr.addEventListener('load', () => {
        //     if (xhr.status === 200) {
        //         // success

        //         // change the component-container state
        //         this.setState({
        //             errors: {}
        //         });

        //         // save the token
        //         Auth.authenticateUser(xhr.response.token);

        //         // update authenticated state
        //         this.props.toggleAuthenticateStatus()

        //         // redirect signed in user to login page
        //         this.props.history.push('/user');
        //     } else {
        //         // failure

        //         // change the component state
        //         const errors = xhr.response.errors ? xhr.response.errors : {};
        //         errors.summary = xhr.response.message;

        //         this.setState({
        //             errors
        //         });
        //     }
        // });
        // xhr.send(formData);
    }


    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }


    render() {
        return (
            <div>
                {/* <Container>
                    <form>
                        <Title>Login</Title>
                        <Input name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                        <Title>Password</Title>
                        <Input name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    </form>
                    <FormButton
                        onClick={this.handleFormSubmit} 
                        onSubmit={this.processForm}
                        onChange={this.changeUser}
                        errors={this.state.errors}
                        successMessage={this.state.successMessage}
                        user={this.state.user}>Login</FormButton>
                </Container> */}
                <MuiThemeProvider >
                    <LoginForm
                        onSubmit={this.processForm}
                        onChange={this.changeUser}
                        errors={this.state.errors}
                        successMessage={this.state.successMessage}
                        user={this.state.user}
                    /> </MuiThemeProvider>
            </div>
        )
    }










};

export default LoginPage;
