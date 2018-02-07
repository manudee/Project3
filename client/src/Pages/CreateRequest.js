import React, {Component} from 'react';
import {Input} from '../components/Form/Input.js';
import {FormButton} from '../components/Form/FormButton.js';
import Title from '../components/Title/Title.js';
import {RequestButton} from '../components/Form/RadioButton.js';
import { TextArea } from './../components/Form/TextArea';
import Container from '../components/Container/Container';



class CreateRequest extends Component{

    render(){
        return(
            <div>
                <Container>
                <form>
                <Title>Equipment</Title>
                <Input name="Equipment" placeholder="Equipment"/>
                <RequestButton/>
                <Title>Equipment Name</Title>
                <Input name="Equipment Name" placeholder="Equipment Name"/>
                <Title>Amount</Title>
                <Input name="Amount" placeholder="Amount"/>
                <Title>Justification</Title>
                <TextArea></TextArea>
                <FormButton>Submit Request</FormButton>
                    </form>
                    </Container>
                </div>
        )
    }
}

export default CreateRequest;