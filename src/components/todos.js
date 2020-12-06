import React from 'react';
import TodoItem from './todoItem';

function Todos(props) {
    return(
        // mapping through props passed from App component 
        // Passing down each item to TodoItem component

        props.todos.map((todo)=>(
            <TodoItem id= {todo._id} todo = {todo} mark ={props.mark} delTodo = {props.delTodo}/>
        ))
                
    )
}
export default Todos;
