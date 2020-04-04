import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProject from './AddProject'

class App extends Component {
  onMouseEnter(){
    alert("Welcome");
  }

  render(){
  return (
    <div className="App">
      <AddProject></AddProject>
    </div>
  );
  }
}

export default App;
