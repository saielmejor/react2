import React from 'react'; 
import Card from './Card'; 
import Button from './Button'; 
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';

const Backdrop=(props)=> {
    return ( 
        <div className={classes.backdrop} onClick={props.onConfirm}></div>);
 };

 const ModalOverlay=(props)=>{ 
 return( <Card className={classes.modal}> 
    <header className={classes.header}> 
        <h2>{props.title}</h2>
    </header>m
    <div className={classes.content}> 
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}> 
        <Button onConfirm={props.onConfirm}> Okay </Button>
    </footer>
</Card>) 
 }

const ErrorModal =(props) => { 
    return(
    <React.Fragment> 
    {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>,document.getElementById('backdrop-root'))
    }
    {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))}
 
    </React.Fragment>
        
    )
}
export default ErrorModal ;
