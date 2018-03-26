import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Contact from '../contact/Contact';
import ContactList from '../contact/ContactList';


// const contacts = [
//   { id: 1, name: 'Leanne Graham' },
//   { id: 2, name: 'Ervin Howell' },
//   { id: 3, name: 'Clementine Bauch' },
//   { id: 4, name: 'Patricia Lebsack' },
//   { id: 4, name: 'Patricia Lebsack' },
//   { id: 4, name: 'Patricia Lebsack' },
// ];

class App extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          }
        });

        // const newState = Object.assign({}, this.state, {
        //   contacts: newContact
        // });

        this.setState({ contacts: newContacts});
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Contact name="William Nolasco B" />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
