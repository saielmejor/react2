import React, {useState} from 'react'; 

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helper/Wrapper';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props)=> { 
// this is array destructuring and it will always be use with useState 
    const [enteredUserName,setEnteredUserName]= useState(''); 
    const [enteredUserAge,setEnteredUserAge]= useState(''); 
    const [errorState,setErrorState]=useState('');
const addUserHandler=(event)=>{
    
   
    event.preventDefault();
    
    if (enteredUserName.trim().length ===0 || enteredUserAge.trim().length ===0){ 
        setErrorState({ 
            title:'invalid input', 
            message:'Please enter valid name and age '
        })
        return; // if entered user name and age is 0 then return nothing 
    }
    if(+enteredUserAge<1){ 
        setErrorState({ 
            title:'invalid input', 
            message:'Please enter a valid age >0'
        })
        return;
    }
    props.onAddUser(enteredUserName,enteredUserAge); // pass down enteredUserName and enteredUserAge 
    setEnteredUserAge(''); 
    setEnteredUserName('');

};

const userChangeHandler=(event)=>{ 
    setEnteredUserName(event.target.value); //gets the value tentered 
}
const ageChangeHandler=(event)=>{ 
    setEnteredUserAge(event.target.value); //gets the value tentered 
}
const errorHandler=() => { 
    setErrorState(null);
};
    return ( 
        <Wrapper> 
 { errorState && <ErrorModal title={errorState.title} message={errorState.message} onConfirm={errorHandler}></ErrorModal>}
 {/* checks if there is any error stored, if yes then it will render the correct error message  */}
        <Card className={classes.input}> 
<form onSubmit={addUserHandler}> 
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value= {enteredUserName}onChange={userChangeHandler}></input>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={enteredUserAge} onChange={ageChangeHandler}></input>
        <Button type='submit'>Add User</Button> 

        {/* add makeup component Button  */}

        </form>
        </Card>
        

        </Wrapper>
       
    )
}

export default AddUser; 