import React, { Component } from 'react';
import * as ContactsAPI from './utils/ContactsAPI';
import ContactForm from './contactsForm';
import ListContacts from './ListContacts'
import {Route} from 'react-router-dom';


class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      contacts: []
    }
  }


  componentDidMount(){
    ContactsAPI.getAll().then(contacts => 
      this.setState({contacts:contacts})
      );
  }


  addContact = (contactObj) => {
    ContactsAPI.create(contactObj)
          .then(contact => this.setState(prevState => ({
            contacts:[...prevState.contacts,contact]
          })));
  }


  removeContact = (contactObj) => {
    ContactsAPI.remove(contactObj)
          .then(removedContact => 
            this.setState(prevState => ({
            contacts:prevState.contacts.filter(
              contact => removedContact.id !== contact.id
          )})));
  }


  render() {
    return (
      <div>

        <Route exact path = '/' render = {()=> <ListContacts 
          contacts={this.state.contacts} removeContactHandler =
           {this.removeContact} />
          } /> 

        <Route path = '/create' render = {
          ({history}) => <ContactForm addContactHandler = 
            {(contact) => {
              this.addContact(contact);
              history.push('/');
              }
            } />
          } />
      </div>
    );
  }
}

export default App;
