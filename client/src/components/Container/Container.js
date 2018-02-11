import React from 'react';
import './Container.css';

const Container = (props) => (
    <div className="container-fluid">
        <div className="card">
            <div className="card-header card-title text-center"><strong>{props.title}</strong> </div>
            <div className="card-body">{props.children}</div>
        </div>
    </div>


);

export default Container;