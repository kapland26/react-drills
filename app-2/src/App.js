// DICE ROLLING CODE

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      numDice: 1,
      numSides: 6,
      value: []
    }
  }

  updateNumDice(e){
    this.setState({
      numDice: e.target.value
    })
  }

  updateNumSides(e){
    this.setState({
      numSides: e.target.value
    })
  }

  rollDice(){
    var newVal = [];
    for (var i = 0; i<this.state.numDice; i++){
      newVal[i] = this.state.numSides*Math.random();
      newVal[i] = Math.ceil(newVal[i]);
    }
    this.setState({
      value: newVal
    })
  }

  render(){
    let i=0;
    let diceVal = this.state.value.map((x, i)=> {
      return (
      <div key={i}><p>{x}</p></div>
      )
    }) 
  //   <div key={1}>
  //   <p>{this.state.value} </p>
  // </div> 
    
    return(
      <div class= "App">
      <p>Number of Dice:</p>
      <input value={this.state.numDice} type="text" onChange={(x)=> {this.updateNumDice(x)}} />
      <p> Number of Side per Die:</p>
      <input value={this.state.numSides} type="text" onChange={(x)=>{this.updateNumSides(x)}}/>
      <p>
       <button onClick={() =>this.rollDice()}>Roll Dice</button>
       </p>
       {diceVal}
      </div>
    )
  };
}

export default App;
