import React from 'react'; 

import  classes from './Card.module.css'
const Card= (props)=> { 
return <div className={`${classes.card} ${props.className}`}>{props.children} </div> 

// pass down props className and classes from .card 
// use props.children to pass the data from props 
//you want to apply any class from external pass down thru props 
// in this case you are passing the class className from Card in this <div> 
// inject class dynamically

};
 
export default Card 