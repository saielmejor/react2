import React, {useState ,useRef} from 'react'; 

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helper/Wrapper';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props)=> { 
    const nameInputRef= useRef(''); 
    const ageInputRef= useRef(''); 
// this is array destructuring and it will always be use with useState 
    const [errorState,setErrorState]=useState('');
const addUserHandler=(event)=>{
    
    event.preventDefault();
    const enteredName= nameInputRef.current.value; 
    const enteredAge=ageInputRef.current.value
    if (enteredName.trim().length ===0 || enteredAge.trim().length ===0){ 
        setErrorState({ 
            title:'invalid input', 
            message:'Please enter valid name and age '
        })
        return; // if entered user name and age is 0 then return nothing 
    }
    if(+enteredAge<1){ 
        setErrorState({ 
            title:'invalid input', 
            message:'Please enter a valid age >0'
        })
        return;
    }
    props.onAddUser(enteredName,enteredAge); // pass down enteredUserName and enteredUserAge 
// manipulate the DOM 
nameInputRef.current.value= ''; 
ageInputRef.current.value='';

};


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
        <input id='username' type='text' 
        ref={nameInputRef}></input>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' 
        ref={ageInputRef}></input>
        <Button type='submit'>Add User</Button> 

        {/* add makeup component Button  */}

        </form>
        </Card>
        

        </Wrapper>
       
    )
}

export default AddUser; 