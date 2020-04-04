import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Project = (props) => (
  <tr>
    <td>{props.project.Name}</td>
    <td>{props.project.Description}</td>
    <td>{props.project.Member}</td>
    <td>
      <Link to={"/project/add-member/" + props.project._id}>Add Member</Link>
    </td>
  </tr>
);

export default class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = { project: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/project")
      .then((response) => {
        this.setState({ project: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ProjectList() {
    return this.state.project.map((currentproject) => {
      return <Project project={currentproject}/>
    });
  }

  render() {
    return <div className="App">
      <h3>Project List</h3>
        <table className="table" >
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Member</th>
            </tr>
          </thead>
          <tbody>
            { this.ProjectList() }
          </tbody>
        </table>
</div>
  }
}
