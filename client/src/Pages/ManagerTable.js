import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from "../components/List";
import API from '../utils/API';
import { Redirect } from 'react-router-dom';


class ManagerTable extends Component {

    state = {

        managerData: [],
        isredirectCreateUser: false,
        isredirectCreateRequest: false,
        isredirectAllUsers: false,
        isredirectAllEquipments: false
    }



    componentDidMount() {
        this.getRequests();
    }


    getRequests = () => {

        API.getRequests()
            .then(res => this.setState({ managerData: res.data }))
            .catch(err => console.log(err));

    }



    handleRedirectCreateUser = event => {
        event.preventDefault();
        this.setState({ isredirectCreateUser: true });
    }

    handleRedirectCreateRequest = event => {
        event.preventDefault();
        this.setState({ isredirectCreateRequest: true });
    }

    handleRedirectAllUsers = event => {
        event.preventDefault();
        this.setState({ isredirectAllUsers: true });
    }

    handleRedirectAllEquipments = event => {
        event.preventDefault();
        this.setState({ isredirectAllEquipments: true });
    }




    render() {


        return (
            <div>
                <div className="row">
                    <SaveBtn onClick={this.handleRedirectCreateRequest} value='Create Request' />
                    {this.state.isredirectCreateRequest ? (<Redirect to={{ pathname: "/createrequest", state: this.state }} />) : null}
                    <SaveBtn onClick={this.handleRedirectCreateUser} value='Create User' />
                    {this.state.isredirectCreateUser ? (<Redirect to={{ pathname: "/createuser", state: this.state }} />) : null}
                    <SaveBtn onClick={this.handleRedirectAllUsers} value='All Users' />
                    {this.state.isredirectAllUsers ? (<Redirect to={{ pathname: "/userlist", state: this.state }} />) : null}
                    <SaveBtn onClick={this.handleRedirectAllEquipments} value='All Equipments' />
                    {this.state.isredirectAllEquipments ? (<Redirect to={{ pathname: "/equipments", state: this.state }} />) : null}
                </div>
                <Container fluid className='card'>

                    <Row className='card-header'>
                        <Col size="md-2">
                            <h6>Request Id </h6>
                        </Col>
                        {/* <Col size="md-2">
              <h6>Username</h6>
            </Col> */}
                        <Col size="md-2">
                            <h6>Equipment</h6>
                        </Col>
                        <Col size="md-2">
                            <h6>Description</h6>
                        </Col>
                        <Col size="md-2">
                            <h6>Quantity</h6>
                        </Col>
                    </Row>

                    {this.state.managerData.length ? (
                        <List>
                            {this.state.managerData.map(managerDataValue => (
                                <ListItem key={managerDataValue._id}>

                                    <Row className="card-block">
                                        <Col size="md-2">
                                            <a href={"/api/user" + managerDataValue._id}>{managerDataValue._id}</a>
                                        </Col>
                                        <Col size="md-2">
                                            {managerDataValue.username}
                                        </Col>
                                        <Col size="md-2">
                                            {managerDataValue.equipment}
                                        </Col>
                                        <Col size="md-2">
                                            {managerDataValue.description}
                                        </Col>
                                        <Col size="md-2">
                                            {managerDataValue.quantity}
                                        </Col>
                                    </Row>

                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Requests opened yet</h3>
                        )}


                </Container>
            </div>
        )
    }
}

export default ManagerTable;