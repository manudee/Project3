import React, { Component } from 'react';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from "../components/List";
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

class UserList extends Component {



    state = {
        users: [],
        isredirect: false
    }

    backToManager =()=>{
        console.log("In back");
        
        this.setState({ isredirect: true });
        console.log(this.state.isredirect)
      }

    componentDidMount() {
        this.loadUsers();
    }


    loadUsers = () => {

        API.getUsers()
            // .then(res => console.log(res.data))
            .then(res => this.setState({ users: res.data }))
            .catch(err => console.log(err))
    }



    

    render() {



        return (
            <div>
                <Container fluid className='card'>

                    <Row className='card-header'>
                        <Col size="md-2">
                            <h6>UserName</h6>
                        </Col>
                        <Col size="md-2">
                            <h6>Role</h6>
                        </Col>
                    </Row>

                    {this.state.users.length ? (
                        <List>
                            {this.state.users.map(user => (
                                <ListItem key={user._id}>

                                    <Row className="card-block">

                                        <Col size="md-2">
                                            {user.username}
                                        </Col>
                                        <Col size="md-2">
                                            {user.role}
                                        </Col>
                                        <Col size="md-2">
                                            <SaveBtn value='Update User' />
                                        </Col>
                                        <Col size="md-2">
                                            <SaveBtn value='Delete User' />
                                        </Col>
                                    </Row>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Users yet</h3>
                        )}
                    <br />
                      <div>
          <SaveBtn onClick={this.backToManager} value='Back' />
        </div> 
{this.state.isredirect? (<Redirect to={{pathname:"/manager"}}/>) : null}
                </Container>

            </div>)
        
    }


}


export default UserList;