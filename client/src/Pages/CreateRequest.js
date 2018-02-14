import React, { Component } from 'react';
import { Input } from '../components/Form/Input.js';
import { FormButton } from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';

import { TextArea } from './../components/Form/TextArea';
import Container from '../components/Container/Container';

import API from '../utils/API';
import {Redirect} from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';


class CreateRequest extends Component {

    state = {
        url:"",
        stock:[],
        equipment: "",
        equipDesc:"",
        equipId:"",
        description: "",
        quantity: "",
        old_Quan:"",
        justification: "",
        isredirect: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        
        if(name==='equipment'){
            var temp = value.split('-');
            // [value] = temp[0];
            console.log(temp[2]);
            this.setState({
                equipDesc: temp[1],
                [name]: temp[0],
                old_Quan:temp[2],
                equipId:temp[3]
            })
        }else{
            this.setState({
                [name]: value
            })
        }
        // console.log(name)
    };
    handleCancel= ()=>{
        this.setState({isredirect:true})
    }
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
                console.log(response.data)
                this.setState({ stock: response.data })

            })
          .catch(err => console.log(err))
      }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({url:"user"});
        var requestInfo = {}
        requestInfo.equipment = this.state.equipment;
        requestInfo.equipDesc = this.state.equipDesc;
        requestInfo.description = this.state.description;
        
        // requestInfo.equipmentStatus = false;
        requestInfo.quantity = this.state.quantity;
        requestInfo.justification = this.state.justification;

        console.log(requestInfo);

        var finalQuantity = this.state.old_Quan -  this.state.quantity

        console.log(finalQuantity);
        if(finalQuantity>=0&&requestInfo.equipment&&requestInfo.equipDesc&&requestInfo.description&&requestInfo.justification){
            API.updateEquip(this.state.equipId,{quantity:finalQuantity})
                .then(res => console.log("this is update equip and it worked"))
                .catch(err => console.log("error is " + err));

            API.createRequest(requestInfo)
                .then(res => this.setState(this.setState({
                    equipment: "", 
                    equipDesc:"",
                    description: "",
                    quantity: "",
                    justification: ""
                })))
                .then(() => this.setState({isredirect:true}))
                .catch(err => console.log("error is " + err));
        }else{
            alert("Please put in what is needed or ask manager to order more stuff");
        }
        

        

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
                                        <option value = {equip.equipmentDesc+'-'+equip.brand +'-'+equip.quantity+'-'+equip._id}>{equip.equipmentDesc+'-'+equip.brand}</option>
                                    )
                                )
                            }
                            </select>
                        </div>
                        <Title>Equipement Description</Title>
                        <Input disabled name="equipdesc" placeholder="Equipment Description" value={this.state.equipDesc} />
                        <Title>Description</Title>
                        <Input name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} />
                        <Title>Quantity</Title>
                        <Input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                        <Title>Justification</Title>
                        <TextArea name="justification" placeholder="Justification" value={this.state.justification} onChange={this.handleInputChange}></TextArea>
                        <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>
                        <br />
                        <br />
                        <FormButton onClick={this.handleCancel}>Cancel</FormButton>
                    </form>
                    {this.state.isredirect? (<Redirect to={{pathname:"/user", state:this.state}}/>) : null}
                </Container>
            </div>
        )
    }
}

export default CreateRequest;