import React, { Component } from 'react';
import propTypes from 'prop-types';

export default  class Contact extends Component {
  state={
    showContactInfo :false,
  }
  onShowClick=(id)=>{
    this.setState({showContactInfo: ! this.state.showContactInfo})
  }
    onDeleteClick=(id)=>{
    this.props.deleteClickHandler();
  };
  deleteClickHandler=()=>{
    this.onDeleteClick();
  };
  render(){
    const {contact} = this.props;
    const {showContactInfo} = this.state;
    return (
      <div className="ContactBody">
        <h4>
          {contact.name}
          {showContactInfo ?<i onClick={()=>this.onShowClick(contact.id)} className="fas fa-sort-up" style={{cursor: 'pointer'}}></i>:<i onClick={()=>this.onShowClick(contact.id)} className="fas fa-angle-down" style={{cursor: 'pointer'}}></i>}
          <i onClick={()=>this.onDeleteClick(contact.id)} className="fas fa-times" style={{cursor:'pointer', float:'right',color:'red'}}></i>
        </h4>
        {showContactInfo ? (
        <ul>
          <li>{contact.contacts}</li>
          <li>{contact.emails}</li>
        </ul>) : null}
      </div>
    )
  }
}
Contact.propTypes = {
  contact: propTypes.object.isRequired,
  deleteClickHandler: propTypes.func.isRequired
}


//rcc