import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import router from "./router.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to={"/"}>Product</Link>
          <Link to={"/details"}>Details</Link>
        </nav>
        <br/>
        {router}
      </div>
    );
  }
}

export default App;
