import React,{Component} from 'react';
import axios from 'axios';
import Todos from './components/todos';
import Header from './components/header';
import AddTodo from './components/addTodo';

class App extends Component {
  // state object
  state = {
    todos : [],
    date : new Date(),
  }

  // LifeCycle Method which runs after render
  componentDidMount(){
      axios.get("https://glimmer-near-practice.glitch.me/")
      .then(res=>{
        this.setState({todos:res.data});
      })
      .catch(err=>console.log(err))
  }


  // App method
  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map((todo)=>{
       if (todo._id === id){
            todo.completed = !todo.completed;
       }
       return todo;
      })
    })
  }
  // delete method to remove from todo list
  delTodo = (id)=>{
    // Requesting delete
    axios.delete(`https://glimmer-near-practice.glitch.me/${id}`)
    .then((res)=>this.setState({todos: [...this.state.todos.filter(todo=>todo._id !== id)]}))
  }

  // add method to add to todo list
  addTodo = (title)=>{
      // Requesting post 
      axios.post("https://glimmer-near-practice.glitch.me/",{
        title,
        completed
      })
      .then((res)=>{console.log(res.data);this.setState({todos:[...this.state.todos,res.data]})})
  }

  // render method
  render(){
    return (
      <>
          <Header/>
          <br/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
      </>
    );
  }
}

export default App;
