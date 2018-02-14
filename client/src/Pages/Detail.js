import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';

import { TextArea } from './../components/Form/TextArea';
import "react-table/react-table.css";
import { SaveBtn } from "../components/Button/SaveBtn.js";
import API from "../utils/API";
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';

class Detail extends Component {
  state = {

    request: {},
    isredirect: false
  }


  componentDidMount() {
    this.loadDetail();
  }


  loadDetail = () => {
    //console.log(this.props.match.params.id);
    API.getDetail(this.props.match.params.id)
    .then(res =>{
      console.log(res.data);
      this.setState({ request: res.data })
    } )
    .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({isredirect:true})
  }



  render() {
    return (
      <div>
        <Container>
          <form>
            <Title>Equipment</Title>
            <Input disabled name="equipment" placeholder="Equipment" value={this.state.request.equipment} />
            
            <Title>Equipment Description</Title>
            <Input disabled name="equipdesc" placeholder="Equipment Description" value={this.state.request.equipDesc} />
            
            <Title>Description</Title>
            <Input disabled name="description" placeholder="Description" value={this.state.request.description}  />
            
            <Title>Quantity</Title>
            <Input disabled name="quantity" placeholder="Quantity" value={this.state.request.quantity} />
            
            <Title>Justification</Title>
            <TextArea disabled name="justification" placeholder="Justification" value={this.state.request.justification} ></TextArea>
            
            <FormButton onClick={this.handleFormSubmit}>OK</FormButton>
          </form>
          {this.state.isredirect? (<Redirect to={{pathname:"/user", state:this.state}}/>) : null}
        </Container>
      </div>
      )
  }
}

export default Detail;