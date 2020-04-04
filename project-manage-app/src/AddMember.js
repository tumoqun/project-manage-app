import React, { Component } from 'react';
import axios from 'axios'

class AddProject extends Component {

    constructor(props){
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            Name:'',
            Phone:'',
            Date:''
        }
    }



    onChangeName(e){
        this.setState({
            Name:e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            Phone:e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            Date:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const member={
            Name: this.state.Name,
            Phone : this.state.Phone,
            Birthday: Date(this.state.Birthday)
        }

        axios.post('http://localhost:3000/member/add',member)
        .then(res=>console.log(res.data));

        console.log(member);
        this.setState({
            Name:'',
            Phone:'',
            Birthday:''
        })
    }


  render(){
  return (
    <div className="App">
        <form onSubmit={this.onSubmit}>
            <h3>Add Member</h3>
            <input value={this.state.Name} onChange={this.onChangeName} placeholder="Name"></input>
            <br></br>
            <input type="number" value={this.state.Phone} onChange={this.onChangePhone}  placeholder="Phone"></input>
            <br></br>
            <input type="date" value={this.state.date} onChange={this.onChangeDate}  placeholder="Date"></input>
            <br></br>
            <button>Add</button>
        </form>
    </div>
  );
  }
}

export default AddProject;