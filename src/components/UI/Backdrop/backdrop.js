import React from 'react';
import classes from './backdrop.css';


const Backdrop = (props)=>{
return(
    <React.Fragment >
     <div className={classes.Backdrop} onClick={props.clicked}></div>
    </React.Fragment>
)
}

export default Backdrop;