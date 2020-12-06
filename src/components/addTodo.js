import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import "../App.css";

export function AddTodo({addTodo}) {
    // useState of the form
    const [title,setTitle] = useState('');
    // arrow function on submitting form
    var onSubmit = (e)=>{
        e.preventDefault();
        addTodo(title);
        setTitle(' ');
    }
    return (
        <div>
            <form onSubmit={onSubmit} style = {{display:'flex',paddingLeft:"10px"}}>
                <input 
                type="text" 
                name="title" 
                style={{flex:'10',padding: '10px',border:"2px solid black",fontSize:"1.2em"}} 
                placeholder="Add to do" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
                <Button className="todo_button" style={{backgroundColor:"#54aed1",fontSize:"20px"}}>Submit</Button>
            </form>
        </div>
    )
}


export default AddTodo;
