import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
export function AddTodo({addTodo}) {
    // useState of the form
    const [title,setTitle] = useState('');
    const [tit,setTit] = useState('');
    // arrow function on submitting form
    var onSubmit = (e)=>{
        setTit("yeahhhhhhh")
        e.preventDefault();
        addTodo(title);
        setTitle('')
    }
    return (
        <div>
            {tit}
            <form onSubmit={onSubmit} style = {{display:'flex'}}>
                <input 
                type="text" 
                name="title" 
                style={{flex:'10',padding: '15px',border:"2px solid black",fontSize:"1.2em"}} 
                placeholder="Add to do" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>

                <Button type="submit" variant="contained" color="primary" style={{flex:"1",fontSize:"20px"}}>
                        Submit
                </Button>
            </form>
        </div>
    )
}


export default AddTodo;
