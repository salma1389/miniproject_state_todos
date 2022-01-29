import React from 'react';
import Taskone from './Taskone';

const Tasklist = (props) => {
    return(
        <div>
            {props.list.map((el,i)=> <Taskone task={el} key={i} del={props.delete} controle={props.handelDone}/>)}
        </div>
    )
};

export default Tasklist;