import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import './App.css';

class App extends Component {

  state = {
    contacts: [
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  filterId = shortid()
  
  addNewContact = (contact) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
     })
  }

  banOnAddingDuplicateContact = (value) => {
    this.state.contacts.map(contact => contact.name).includes(value.name) ?
      alert(`${value.name} is already in contacts`) :
      this.addNewContact(value);
  }

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  
  render() {

    const { banOnAddingDuplicateContact, handleChangeFilter, deleteContact, filterId } = this
    const {filter, contacts} = this.state

    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm
          banOnAddingDuplicateContact={banOnAddingDuplicateContact}>
        </ContactForm>

        <h2>Contacts</h2>

        <Filter
          filterId={filterId}
          handleChangeFilter={handleChangeFilter}>
        </Filter>

        <ContactList>
          <ContactItem
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}>
          </ContactItem>
        </ContactList>
      </div>
    )
  }
}

export default App;
