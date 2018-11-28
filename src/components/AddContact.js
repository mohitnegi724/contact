import React, { Component } from 'react';

export default class AddContact extends Component {
    state={
        name:'',
        email:'',
        contact:''
  };
  onChange=e=>{this.setState({[e.target.name]:e.target.value})};
  onSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state);
    }
  render() {
      const {name, email, contact} = this.state;
    return (
      <div>
        <h1> AddContact</h1>
        <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Full Name" name="name" value={name} onChange={this.onChange}></input>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" value={email} onChange={this.onChange}></input>
            <label htmlFor="contact">Contact</label>
            <input type="text" placeholder="Contact" name="contact" value={contact} onChange={this.onChange}></input>
            <button type="submit" value="Add Contact">Add Contact</button>
        </form>
      </div>
    )
  }
}
