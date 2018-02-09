import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';



class CreateEquipment extends Component{

    state={
        equipment:"",
        description:"",
        quantity:""
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
        equipmentInfo.equipment = equipment;
        equipmentInfo.description = description;
        equipmentInfo.quantity = quantity;
      

        console.log(equipmentInfo);

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
                </Container>
            </div>        
        )}

}

export default CreateEquipment;