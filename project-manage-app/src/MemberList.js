import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const Member = (props) => (
  <tr>
    <td>{props.member.Name}</td>
    <td>{props.member.Phone}</td>
    <td>{props.member.Birthday}</td>
    <td>
    <button onClick={() => { props.AddToProject(props.member._id)}}>Add to project</button>
    </td>
  </tr>
);

export default class MemberList extends Component {

  
  constructor(props) {
    super(props);
    this.AddToProject=this.AddToProject.bind(this);

    this.state = { member: [] };

    
  }

  AddToProject(id){
      axios.post(window.location.href.replace("3001","3000")+id)
      .then((response=>{
      }))
      .catch((error)=>{
        console.log(error);
      })
      alert("Add successfully!");
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/project/add-member/:id")
      .then((response) => {
        this.setState({ member: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  MemberList() {
    return this.state.member.map((currentmember) => {
      return <Member member={currentmember} AddToProject={this.AddToProject} key={currentmember._id}/>
    });
  }

  render() {
    return <div className="App">
      <h3>Choose a member to the project!</h3>
        <table className="table" >
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            { this.MemberList() }
          </tbody>
        </table>
</div>
  }
}