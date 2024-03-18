import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiUser, FiPhone } from 'react-icons/fi';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  nameInput = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const newContact = { ...this.state, id: Date.now() };

    // Avoid duplicate names
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const updatedContacts = [...contacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    this.reset();
    if (this.props.onAddContact) this.props.onAddContact(newContact); // Callback if needed
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.field}>
          <IconContext.Provider value={{ size: '16px', className: css.field_icon }}>
            <FiUser />
          </IconContext.Provider>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            ref={this.nameInput}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.field}>
          <IconContext.Provider value={{ size: '16px', className: css.field_icon }}>
            <FiPhone />
          </IconContext.Provider>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .-\s]?\(?\d{13}?)?[ .-\s]?\d{1,4}[ .-\s]?\d{1,4}[ .-\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
        </div>

            <button className={css.add_button} type="submit">
      Add contact
    </button>
  </form>
);
}
}

export default ContactForm;


// import React, { Component } from 'react';
// import { IconContext } from 'react-icons';
// import { FiUser, FiPhone } from 'react-icons/fi';
// import css from './ContactForm.module.css';

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = { ...INITIAL_STATE };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   nameInput = React.createRef();

//   handleSubmit = evt => {
//     evt.preventDefault();

//     try {
//       this.props.onSubmit({ ...this.state });
//       this.reset();
//     } catch (error) {
//       alert(error.message);
//       this.nameInput.current.focus();
//     }
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <div className={css.field}>
//           <IconContext.Provider
//             value={{ size: '16px', className: css.field_icon }}
//           >
//             <FiUser />
//           </IconContext.Provider>

//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             id="name"
//             onChange={this.handleChange}
//             ref={this.nameInput}
//             placeholder="Name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label className={css.label} htmlFor="name">
//             Name
//           </label>
//         </div>
//         <div className={css.field}>
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={number}
//             id="number"
//             onChange={this.handleChange}
//             placeholder="Number"
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <label className={css.label} htmlFor="number">
//             Number
//           </label>
//         </div>





//         <button className={css.add_button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
