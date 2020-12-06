import React, { Component } from 'react';

function TodoItem ({todo,mark,delTodo}){
    // arrow function for css styling
    var getStyle = ()=>{
        return {
        background: '#f4f4f4',
        padding : "10px",
        borderBottom : "1px #ccc dotted",
        textDecoration : todo.completed ? 'line-through': 'none'
        }
    }
    // arrow function for styling button
    var buttonStyle = ()=>{
        return {
            background: 'red',
            padding : "5px 8px",
            float : 'right',
            cursor : 'pointer',
            border : 'none',
            borderRadius : "50%",
            fontSize: "1.2em"
        }    
    }
        return (
            <div style={getStyle()}>
                <p style={{fontSize:"2em"}}>
                    <input  type="checkbox"  onChange={()=>mark(todo._id,!todo.completed)}/>{'  '}
                    {todo.title}
                    <button style={buttonStyle()} onClick={()=>delTodo(todo._id)}>x</button>
                </p>
            </div>
        )
    }
    

export default TodoItem;
