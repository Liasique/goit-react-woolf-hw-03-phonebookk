import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = data => {
    const normalizedName = data.name.toLowerCase();
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isExist) {
      throw new Error(`${data.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [{ ...data, id: nanoid() }, ...prevState.contacts],
    }));
  };

  handleRemoveContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleFilterClear = () => {
    this.setState({ filter: '' });
  };

  filterContacts() {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    const contacts = this.filterContacts();
    const { filter } = this.state;
    return (
      <>
        <Section>
          <h1>Phonebook</h1>
        </Section>
        <Section>
          <ContactForm onSubmit={this.handleAddContact} />
        </Section>
        <Section>
          <Filter
            value={filter}
            onFilterChange={this.handleFilterChange}
            onFilterClear={this.handleFilterClear}
          />
        </Section>
        <Section title={filter ? `Results: ${contacts.length}` : 'Contacts'}>
          <ContactList
            contacts={contacts}
            onRemove={this.handleRemoveContact}
            filter={filter}
          />
        </Section>
      </>
    );
  }
}

export default App;
