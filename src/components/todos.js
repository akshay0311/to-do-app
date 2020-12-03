import React from 'react';
import TodoItem from './todoItem';

function Todos(props) {
    return(
        // mapping through props passed from App component 
        // Passing down each item to TodoItem component
        props.todos.map((todo)=>(
            <TodoItem id= {todo.id} todo = {todo} markComplete={props.markComplete} delTodo = {props.delTodo}/>
        ))
    )
}
export default Todos;
