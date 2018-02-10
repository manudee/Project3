import React from 'react';

export const FormButton = (props) => (

        <button{...props} className = 'btn btn-success btn-lg' type="submit">{props.children}</button>
    
)