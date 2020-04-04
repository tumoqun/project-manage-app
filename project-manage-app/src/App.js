import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProject from './AddProject'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AddMember from './AddMember'

class App extends Component {
  onMouseEnter(){
    alert("Welcome");
  }

  render(){
  return (
    <Router>
    <div className="App">
      <Route path="/project/add"><AddProject></AddProject></Route>
      <Route path="/member/add"><AddMember></AddMember></Route>
    </div>
    </Router>
  );
  }
}

export default App;
