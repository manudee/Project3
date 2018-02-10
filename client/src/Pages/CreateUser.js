import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';

class CreateUser extends Component{

    state={
        username:"",
        password:"",
        role:"",
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

       }





    render(){
        return(
            <div>
                <Container>
                    <form>
                        <Title>UserName</Title>
                        <Input name="username" placeholder="UserName" value={this.state.username} onChange={this.handleInputChange}/>
                        <Title>Password</Title>
                        <Input name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                        <Title>Role</Title>
                        <Input name="role" placeholder="Role" value={this.state.role} onChange={this.handleInputChange}/>
                        <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>
                    </form>
                    {this.state.isredirect? (<Redirect to={{pathname:"/userlist", state:this.state}}/>) : null}
                </Container>
            </div>        
        )}

}

export default CreateUser;