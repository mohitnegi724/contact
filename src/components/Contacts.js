import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../context';

export default class Contacts extends Component 
    render(){
      return(
        <Consumer>
          {value => {
            const { Contacts } = value;
            deleteContact=id=>{
            const {Contacts} = this.state;
            const newContacts = Contacts.filter(contact => (contact.id !== id));
            this.setState({
                Contacts: newContacts
              })
            }
            const ContactCards = value.Contacts.map(Person => (<Contact key={Person.id} contact={Person} deleteClickHandler={() => { this.deleteContact(Person.id) }} />));
            return (
              <React.Fragment>
                {value.Contacts.length ? ContactCards : <div>Your Contact List Is Empty</div>}
              </React.Fragment>
            )
          }}
        </Consumer>
      )
    }
}

