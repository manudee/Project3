import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import { RequestButton } from '../components/Form/RadioButton.js';
import { TextArea } from './../components/Form/TextArea';
import Container from '../components/Container/Container';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';


class CreateRequest extends Component {

    state = {
        stock:[],
        equipment: "",
        description: "",
        quantity: "",
        justification: "",
        isredirect: false
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
    };

    componentDidMount() {
        this.loadEquipments();
    }


      loadEquipments = () => {
        API.getEquipment()
          // .then(res=>console.log(res.data))
          .then(response => {
            
                this.setState({ stock: response.data })

            })
          .catch(err => console.log(err))
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
            .then(() => this.setState({isredirect:true}))
            .catch(err => console.log("error is " + err));

    }

    // const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];


    // renderDropdownButton = ()=> {
    //     <SplitButton
    //       bsStyle={"Default"}
    //       title={"equipment"}
    //       key={"0"}
    //       id={`split-button-basic-0`}
    //     >
    //       <MenuItem eventKey="1">Action</MenuItem>
    //       <MenuItem eventKey="2">Another action</MenuItem>
    //       <MenuItem eventKey="3">Something else here</MenuItem>
    //       <MenuItem divider />
    //       <MenuItem eventKey="4">Separated link</MenuItem>
    //     </SplitButton>
    // }
/*<ButtonToolbar>
                            <DropdownButton
                              bsStyle={'primary'}
                              title={'Equipment'}
                              key={'0'}
                              id={`dropdown-basic-0`}
                            >
                              <MenuItem eventKey="1">Action</MenuItem>
                              <MenuItem eventKey="2">Another action</MenuItem>
                              <MenuItem eventKey="3" active>
                                Active Item
                              </MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                        */
/*<select>
                        {this.state.stock.map(equip =>(
                                <option value = {equip}>{equip}</option>
                            ))
                        }
                        </select>*/

    render() {
        return (
            <div>
                <Container>
                    <form>
                        <Title>Equipment</Title>
                        <div align="center">
                            <select name = "equipment" class='text-center' onChange = {this.handleInputChange} >
                                <option >Please pick from one of the following</option>
                            {
                                this.state.stock.map(equip =>(
                                        <option value = {equip.equipmentDesc}>{equip.equipmentDesc+'-'+equip.brand}</option>
                                    )
                                )
                            }
                            </select>
                        </div>
                        <Title>Description</Title>
                        <Input name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} />
                        <Title>Quantity</Title>
                        <Input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                        <Title>Justification</Title>
                        <TextArea name="justification" placeholder="Justification" value={this.state.justification} onChange={this.handleInputChange}></TextArea>
                        <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>

                    </form>
                    {this.state.isredirect? (<Redirect to={{pathname:"/user", state:this.state}}/>) : null}
                </Container>
            </div>
        )
    }
}

export default CreateRequest;