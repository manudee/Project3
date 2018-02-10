import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


export const RequestButton = (props) => (

    <RadioGroup onChange={ this.onChange } vertical>
  <RadioButton value="Checkout">
    Checkout
  </RadioButton>
  <RadioButton value="Return">
    Return
  </RadioButton>
  </RadioGroup>

)