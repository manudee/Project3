import React, { Component } from 'react';

import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import API from "../utils/API";
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';

class EquipmentTable extends Component {
  state = {

    equipments: [],
    isredirect: false
  }


  componentDidMount() {
    this.loadEquipments();
  }


  loadEquipments = () => {
    API.getEquipment()
      // .then(res=>console.log(res.data))
      .then(response => this.setState({ equipments: response.data }))
      .catch(err => console.log(err))
  }







  handleUpdate = event => {
    event.preventDefault();
    console.log("I AM In handleupdate");

    var equipmentInfo = {};

    equipmentInfo.equipmentDesc = this.state.equipmentDesc;
    equipmentInfo.brand = this.state.brand;
    equipmentInfo.quantity = this.state.quantity;




  }


  handleDelete = event => {
    event.preventDefault();
    console.log("I AM In handleDelete");

    var equipmentInfo = {};

    equipmentInfo.equipmentDesc = this.state.equipmentDesc;
    equipmentInfo.brand = this.state.brand;
    equipmentInfo.quantity = this.state.quantity;



  }


  handleCreateEquipment = event => {
    event.preventDefault();
    console.log("In handleCreate Equipment");

    this.setState({ isredirect: true });
  }



  render() {
    return (
      <div>
        <div>
          <SaveBtn onClick={this.handleCreateEquipment} value='Create Equipment' />
           {this.state.isredirect? (<Redirect to={{pathname:"/createequipment", state:this.state}}/>) : null}
        </div>



        <Container fluid className='card'>

          <Row className='card-header'>
          
           <Col size="md-3">
             <h6>Equipment</h6>
           </Col>
           <Col size="md-3">
             <h6>Brand</h6>
           </Col>
           <Col size="md-1">
             <h6>Quantity</h6>
           </Col>
           <Col size="md-2">
             <h6>Action</h6>
           </Col>
         </Row>

          {this.state.equipments.length ? (
            <List>
              {this.state.equipments.map(equipment => (
                <ListItem key={equipment._id}>

                  <Row className="card-block">
                    <Col size="md-3">
                      {equipment.equipmentDesc}
                    </Col>
                    <Col size="md-3">
                      {equipment.brand}
                    </Col>
                    <Col size="md-1">
                      {equipment.quantity}
                    </Col>
                    <Col size="md-2">
                      <SaveBtn onClick={this.handleUpdate} value='Update Equipment' />
                    </Col>
                    <Col size="md-2">
                      <SaveBtn onClick={this.handleDelete} value='Delete Equipment' />
                    </Col>
                  </Row>

                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Equipments added yet</h3>
            )}


        </Container>
      </div>
    )
  }
}

export default EquipmentTable;