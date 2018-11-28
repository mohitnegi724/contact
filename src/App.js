import React, { Component } from 'react';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import Header from './components/Header';
import {Provider} from './context';
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider>
          <div className="App">
            <Header branding="Contact Manager" />
            <AddContact />
            <Contacts />
          </div>
        </Provider>
    );
  }
}

export default App;
