import React, { Component } from 'react';
import "../App.css";

function TodoItem ({todo,mark,delTodo,index}){
    // arrow function for css styling
    var getStyle = ()=>{
        return {
        background: index%2 === 0 ? '#f4f4f4':"white",
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
                <p className="todo_items">
                    <input  type="checkbox"  onChange={()=>mark(todo._id,!todo.completed)}/>{'  '}
                    <span>{todo.title}</span>
                    <button style={buttonStyle()} onClick={()=>delTodo(todo._id)}>x</button>
                </p>
            </div>
        )
    }
    

export default TodoItem;
