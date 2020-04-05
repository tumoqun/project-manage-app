import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddProject from './AddProject'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import AddMember from './AddMember'
import ProjectList from './ProjectList';
import MemberList from './MemberList';
import { Link } from "react-router-dom";

class App extends Component {
  onMouseEnter(){
    alert("Welcome");
  }

  render(){
  return (
    <Router>
    <div className="App">
    <Link to={"/project/add" }>Add Project</Link>
    <br></br>
    <Link to={"/member/add" }>Add Member</Link>
    <br></br>
    <Link to={"/project-list" }>Show ProjectList</Link>
      <Route path="/project/add"><AddProject></AddProject></Route>
      <Route path="/member/add"><AddMember></AddMember></Route>
      <Route path="/project-list"><ProjectList></ProjectList></Route>
      <Route path="/project/:id/add-member/"><MemberList></MemberList></Route>
    </div>
    </Router>
  );
  }
}

export default App;
