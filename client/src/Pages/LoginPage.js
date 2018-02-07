import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';

class LoginPage extends Component{

    render(){
        return(
            <div>
                <Container>
        <form>
      <Title>Login</Title>
     <Input name="username" placeholder="username"/>
     <Title>Password</Title>
     <Input name="password" placeholder="password"/>
    </form>
    <FormButton>Login</FormButton>
    </Container>
                </div>
        )
    }









	
};

export default LoginPage;
