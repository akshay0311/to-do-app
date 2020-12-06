import React,{Component} from 'react';
import axios from 'axios';
import Todos from './components/todos';
import Header from './components/header';
import AddTodo from './components/addTodo';

class App extends Component {
  // state object
  state = {
    todos : [],
    date : String(new Date().getDate())+"."+String(new Date().getMonth())+"."+String(new Date().getFullYear())
  }

  // LifeCycle Method which runs after render
  componentDidMount(){
      axios.get(`https://glimmer-near-practice.glitch.me/${this.state.date}`)
      .then(res=>{
        console.log(res.data[0].todoItem)
        this.setState({todos:res.data[0].todoItem});
      })
      .catch(err=>console.log(err))
  }



  mark = (id,completed)=>{
      axios.put(`https://glimmer-near-practice.glitch.me/${id}/${this.state.date}/${completed}`);
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
    axios.delete(`https://glimmer-near-practice.glitch.me/${id}/${this.state.date}`)
    .then((res)=>this.setState({todos: [...this.state.todos.filter(todo=>todo._id !== id)]}))
  }

  // add method to add to todo list
  addTodo = (title)=>{
      // Requesting post 
      axios.post(`https://glimmer-near-practice.glitch.me/${this.state.date}`,{
        title,
        completed:false
      })
      .then((res)=>{console.log(res.data);this.setState({todos:[...this.state.todos,res.data]})})
  }

  // render method
  render(){
    return (
      <>
          <Header date={this.state.date}/>
          <br/>
          <AddTodo addTodo={this.addTodo}/>
          {
          this.state.todos.length > 0 ?
          <Todos todos={this.state.todos} mark={this.mark} delTodo = {this.delTodo}/>
          : <h1>Please add your today's todo</h1>
          }
      </>
    );
  }
}

export default App;
