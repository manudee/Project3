import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import Container from '../components/Container/Container';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';


class CreateEquipment extends Component{

    state={
        equipment:{},
        brand:"",
        quantity:"",
        isredirect: false
    }    

    componentDidMount() {
        this.loadEquipments();
    }

    loadEquipments = () => {
    //console.log(this.props.match.params.id);
    API.equipDetail(this.props.match.params.id)
    .then(res =>{
      console.log(res.data);
      this.setState({equipment:res.data, brand: res.data.brand,quantity:res.data.quantity })
    } )
    .catch(err => console.log(err));
  }

    handleInputChange = event => {
        const{name,value} = event.target;
        this.setState({
          [name]:value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();

        
        var brand=this.state.brand;
        var quantity= this.state.quantity;
       

        var equipmentInfo = {}
        equipmentInfo.brand = brand;
        equipmentInfo.quantity = quantity;
      

        console.log(equipmentInfo);


        API.updateEquip(this.props.match.params.id,equipmentInfo)
                .then(res => this.setState(this.setState({
                    equipment: {}, 
                    brand:"",
                    quantity: ""
                })))
                .catch(err => console.log("error is " + err))
                .then(() => this.setState({isredirect:true}));

       }





    render(){
        return(
            <div>
                <Container>
                <form>
                <Title>Equipment</Title>
                <Input disabled name="equipment" placeholder="Equipment" value={this.state.equipment.equipmentDesc} />
                <Title>Description</Title>
                <Input name="brand" placeholder="Description" value={this.state.brand} onChange={this.handleInputChange} />
                <Title>Quantity</Title>
                <Input name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
                <FormButton onClick={this.handleFormSubmit}>Update</FormButton>
                    </form>
                    {this.state.isredirect? (<Redirect to={{pathname:"/equipments", state:this.state}}/>) : null}
                </Container>
            </div>        
        )}

}

export default CreateEquipment;