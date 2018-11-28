import React, {Component} from 'react';
const Context = React.createContext();

export class Provider extends Component{
    state = {
        Contacts: [{
          id: 1,
          name: "Mohit Singh Negi",
          contacts: "+91 7678 632 236",
          emails: "example@home.com",
          profileImage: "https://goo.gl/KEropf"
        },
        {
          id: 2,
          name: "Maa",
          contacts: "+91 1234 567 890",
          emails: "example@home.com",
          profileImage: "https://goo.gl/2fXe77"
        },
        {
          id: 3,
          name: "Narendra Modi",
          contacts: "+91 9876 543 210",
          emails: "example@home.com",
          profileImage: "https://goo.gl/1Y21nd"
        }]
      }
    render(){
     return(
        <Context.Provider value={this.state}>
            {this.props.children} 
        </Context.Provider>
     )   
    }
};

export const Consumer = Context.Consumer;

