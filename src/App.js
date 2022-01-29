import React, { Component } from 'react';
import './App.css';
import Tasklist from './Components/Tasklist';
import Searchbar from './Components/Searchbar';
import Navbarar from './Components/Navbarar';

export default class App extends Component{
  state={
    todos:[
      {id:Math.random(),action:"Wake Up",isDone:true},
      {id:Math.random(),action:"Get Coffee",isDone:false}
  ],
  searchfild:''
  }
  


  //Remove an element in todos
  handleRemove=(id)=>{
    this.setState({ todos:this.state.todos.filter(el=>el.id !==id)})
  }

  //handleShows = (id) => {
    //this.setState({isDone : this.state.todos.map((el) => el.id===id ? el.isDone = !el.isDone : el.isDone)});
    //};
  
    //change the button undo/complete
handleShows = (id) => {
  this.setState({todos:this.state.todos.map((el) => el.id===id ? {...el,isDone:!el.isDone}:el)});
};

//add the input
addOnChange=(newAction)=>{
 this.setState({todos: [...this.state.todos,newAction]});
  //this.setState({todos:this.state.todos.push(newAction)});
  this.setState({searchfild : ""})
}

//link the input
filterOnChange = (event)=>{
  //console.log(event.target.value)
  this.setState({
    searchfild:event.target.value
  });
};

render(){
  return(
    <div className='App'>
      <Navbarar inputvalue={this.state.searchfild} contenue={this.filterOnChange} add={this.addOnChange}/>
      <Tasklist list={this.state.todos} delete={this.handleRemove} handelDone={this.handleShows}/>
    </div>
  );
}
}




