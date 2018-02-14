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
    id:'',
    equipments: [],
    isredirect: false
  }


  componentDidMount() {
    this.loadEquipments();
  }


  loadEquipments = () => {
    API.getEquipment()
      // .then(res=>console.log(res.data))
      .then(response =>{ 
        console.log(response.data)
        this.setState({ equipments: response.data })})
      .catch(err => console.log(err))
  }



  backToManager =()=>{
    console.log("In back");
    this.setState({id:"manager"})
    this.setState({ isredirect: true });
  }



  handleUpdate = id => {
    
    console.log("In handleUpdate");
    this.setState({id:"equipments/"+id})
    this.setState({ isredirect: true });
    




  }


  handleDelete = id => {
    API.deleteEquip(id)
      .then(res => this.loadEquipments())
      .catch(err => console.log(err));

  }


  handleCreateEquipment = event => {
    event.preventDefault();
    console.log("In handleCreate Equipment");
    this.setState({id:"createequipment/"})
    this.setState({ isredirect: true });
  }



  render() {
    return (
      <div>
        <div>
          <SaveBtn onClick={this.handleCreateEquipment} value='Create Equipment' />
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
              {this.state.equipments.map((equipment) => {
                // console.log(equipment);
                // {
                //   this.setState({state})
                // }
                return (
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
                      <SaveBtn onClick={()=>{this.handleUpdate(equipment._id)}} value="Update" />
                  
                    </Col>
                    <Col size="md-2">
                      <SaveBtn onClick={()=> this.handleDelete(equipment._id)} value='Delete Equipment' />
                    </Col>
                  </Row>

                </ListItem>
              )})
            }
            {this.state.isredirect? (<Redirect to={{pathname:"/"+this.state.id}}/>) : null}


            </List>
          ) : (
              <h3>No Equipments added yet</h3>
            )}
          <br />
        <div>
          <SaveBtn onClick={this.backToManager} value='Back' />
        </div>


        </Container>
      </div>
    )
  }
}

export default EquipmentTable;