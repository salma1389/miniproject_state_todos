import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import React from 'react';

const Taskone = ({task,del,controle}) => {
    return(
        
        <div className='card'>
            <div className={task.isDone?'completeClass':'undoClass'}>
                <h1>{task.action}</h1>
            </div>
            <Stack direction="row" spacing={2}  justifyContent="center">
                
            <Button variant="contained" onClick={()=>controle(task.id)}> {task.isDone?'undo':'complete'} </Button>
                <Button variant="contained" onClick={()=>del(task.id)} startIcon={<DeleteIcon />}>
                Delete
      </Button>
                
      </Stack>
        </div>
    )
};
export default Taskone;