import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';


class CreateEquipment extends Component{

    state={
        equipment:"",
        description:"",
        quantity:"",
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

        var equipment=this.state.equipment;
        var description=this.state.description;
        var quantity= this.state.quantity;
       

        var equipmentInfo = {}
        equipmentInfo.equipmentDesc = equipment;
        equipmentInfo.brand = description;
        equipmentInfo.quantity = quantity;
      

        console.log(equipmentInfo);


        API.createEquipment(equipmentInfo)
        .then(res => this.setState(this.setState({
            equipment: "", 
            description: "",
            quantity: ""
        })))
        .then(() => this.setState({isredirect:true}))
        .catch(err => console.log("error is " + err));

       }





    render(){
        return(
            <div>
                <Container>
                <form>
                <Title>Equipment</Title>
                <Input name="equipment" placeholder="Equipment" value={this.state.equipment} onChange={this.handleInputChange}/>
                <Title>Description</Title>
                <Input name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange}/>
                <Title>Quantity</Title>
                <Input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
                <FormButton onClick={this.handleFormSubmit}>Submit Request</FormButton>
                    </form>
                    {this.state.isredirect? (<Redirect to={{pathname:"/equipments", state:this.state}}/>) : null}
                </Container>
            </div>        
        )}

}

export default CreateEquipment;