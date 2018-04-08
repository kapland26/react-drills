import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.setState({
      baseURL:"http://pokeapi.co/api/v2"
    })
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
