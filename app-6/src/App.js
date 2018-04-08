import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';

class App extends Component {
  constructor(){  
    super();

    this.state={
      input: "",
      tasks : []
    }
  }

  handleInput( e ) {
    this.setState({ input: e });
  }

  handleAddToList(){
    let newArr = this.state.tasks.slice();
    newArr.push(this.state.input);
    this.setState({tasks: newArr});
  }

  render() {
    let list = this.state.tasks.map((val, i)=>{
      return( 
          <Todo key={i} task={val} />
      )
    })

    return (
      <div className="App">
      <input onChange={(e)=>this.handleInput(e.target.value)} type="input" />
      <button onClick={()=>this.handleAddToList()} > Add </button>
      {list}
      </div>
    );
  }
}

export default App;
