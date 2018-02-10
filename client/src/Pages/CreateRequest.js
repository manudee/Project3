import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import { RequestButton } from '../components/Form/RadioButton.js';
import { TextArea } from './../components/Form/TextArea';
import Container from '../components/Container/Container';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import API from '../utils/API';


class CreateRequest extends Component {

    state = {
        equipment: "",
        description: "",
        quantity: "",
        justification: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    setrequestType(event) {
        //console.log(event.target.value)
        this.setState({ checkout: event.target.value });
        return event.target.value;
    }

    handleFormSubmit = event => {
        event.preventDefault();

        var requestInfo = {}
        requestInfo.equipment = this.state.equipment;
        requestInfo.description = this.state.description;
        requestInfo.reqStatus = false;
        requestInfo.equipmentStatus = false;
        requestInfo.quantity = this.state.quantity;
        requestInfo.justification = this.state.justification;

        console.log(requestInfo);

        API.createRequest(requestInfo)
            .then(res => this.setState(this.setState({
                equipment: "", 
                description: "",
                quantity: "",
                justification: ""
            })))
            .catch(err => console.log("error is " + err));




    }







    render() {
        return (
            <div>
                <Container>
                    <form>
                        <Title>Equipment</Title>
                        <Input name="equipment" placeholder="Equipment" value={this.state.equipment} onChange={this.handleInputChange} />
                        <div onChange={this.setrequestType.bind(this)}>
                            <Input type="radio" value="checkout" name="requestType" />Checkout
                <Input type="radio" value="return" name="requestType" />Return
                </div>
                        <Title>Description</Title>
                        <Input name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} />
                        <Title>Quantity</Title>
                        <Input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                        <Title>Justification</Title>
                        <TextArea name="justification" placeholder="Justification" value={this.state.justification} onChange={this.handleInputChange}></TextArea>
                        <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>
                    </form>
                </Container>
            </div>
        )
    }
}

export default CreateRequest;