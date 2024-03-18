import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemove, filter }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, ...contact }) => (
        <ContactItem
          key={id}
          onContactRemove={() => onRemove(id)}
          filter={filter}
          {...contact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
