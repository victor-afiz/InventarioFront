
import React, { Component } from 'react';


const Button = (props) => {
    return (
        <button bsStyle={props.color} className={props.class} onClick={() => { props.operation(props.value)}}> </button>
    )
};

export default Button;