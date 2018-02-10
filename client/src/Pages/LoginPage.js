import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component{

    state={
        username:"",
        password:"",
        isredirect: false
    }    

    handleInputChange = event => {
        const{name,value} = event.target;
        this.setState({
          [name]:value
        })
       };

    handleFormSubmit = event => {
        event.preventDefault();

        var username=this.state.username;
        var password=this.state.password;

        var loginInfo = {}
        loginInfo.username = username;
        loginInfo.password = password;

        console.log(loginInfo);

        API.login(loginInfo)
        .then(res => {
          console.log(res)
            this.setState({
              username: "", 
              password: ""
            })
          }
        )
        // .then(() => this.setState({isredirect:true}))
        .catch(err => console.log("error is " + err));

       }



    render(){
        return(
          <div>
            <Container>
              <form>
                <Title>Login</Title>
                <Input name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                <Title>Password</Title>
                <Input name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
              </form>
              <FormButton onClick={this.handleFormSubmit}>Login</FormButton>
              {this.state.isredirect? (<Redirect to={{pathname:"/manager", state:this.state}}/>) : null}
            </Container>
          </div>
          )
      }









	
};

export default LoginPage;
