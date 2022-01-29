
import  React from 'react';


const Searchbar = (props) => {
    const handelOnSubmit=(e)=>
    {
        e.preventDefault();
        const newadd={
            id:Math.random(),
            action:props.inputvalue,
            isDone:false
        }
    props.inputvalue.trim()==="" || props.inputvalue.length>15 ? alert("Please add a text input with length <15"):
     props.add(newadd) ;
     
     
    };
    return(
        <div className='submitclass'>
            <form onSubmit={handelOnSubmit}>
            <label htmlFor="header-search">
                <span className='visually-hidden'> Add An Input Here </span>
            </label>
            <input type="text"
            id="header-search"
             value={props.inputvalue}
            name='s'
            onChange={props.contenue}
            />
            <button type="submit" >Add</button>
           
            </form>
        </div>
    )
   
};

export default Searchbar;

