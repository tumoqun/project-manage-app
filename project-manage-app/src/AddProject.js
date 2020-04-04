import React, { Component } from 'react';
import axios from 'axios'

class AddProject extends Component {

    constructor(props){
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            Name:'',
            Description:''
        }
    }



    onChangeName(e){
        this.setState({
            Name:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            Description:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const project={
            Name: this.state.Name,
            Description : this.state.Description
        }

        axios.post('http://localhost:3000/project/add',project)
        .then(res=>console.log(res.data));

        console.log(project);
        this.setState({
            Name:'',
            Description:''
        })
    }


  render(){
  return (
    <div className="App">
        <form onSubmit={this.onSubmit}>
            <h3>Add Project</h3>
            <input value={this.state.Name} onChange={this.onChangeName} placeholder="Name"></input>
            <br></br>
            <input value={this.state.Description} onChange={this.onChangeDescription}  placeholder="Description"></input>
            <br></br>
            <button>Add</button>
        </form>
    </div>
  );
  }
}

export default AddProject;