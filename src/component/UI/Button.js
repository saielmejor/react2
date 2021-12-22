import React from 'react'; 

import classes from  './Button.module.css';

const Button =(props)=> { 
    return ( 
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
            {/* pass down props.children content */}
        </button> 
        // it will get props type otherwise will fall into button typr
    )
}
export default Button; 