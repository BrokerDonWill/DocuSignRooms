import React from 'react';

import classes from './Spinner.module.css';

/*
    Custom spinner component 
    props:
        component: (String) the name of the component being loaded
*/
const spinner = ( props ) => {
    return (
        <div className={classes.container}>
            <h3 id={classes.SpinnerLabel}>Loading {props.component}</h3>
            <div className={classes.spinner}></div>
        </div>
    )
}
export default spinner;