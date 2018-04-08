import React from 'react';
import {Component} from 'react';

function Todo(props){

    return(
        // {console.log("Are we in Todo??")}
        
        <p>{props.task}</p>
    
    )

}

export default Todo;