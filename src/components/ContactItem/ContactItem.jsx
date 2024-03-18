import React from 'react';
import { IconContext } from 'react-icons';
import { FiUser, FiPhone, FiX } from 'react-icons/fi';
import ShowSearchResult from 'components/ShowSearchResult/ShowSearchResult';
import css from './ContactItem.module.css';

const ContactItem = ({ onContactRemove, filter, name, number }) => {
  return (
    <li className={css.wrapper}>
      <div className={`${css.item} ${css.name}`}>
        <IconContext.Provider value={{ size: '20px', className: css.icon }}>
          <FiUser />
        </IconContext.Provider>
        {!filter ? (
          name
        ) : (
          <ShowSearchResult text={name} searchTerm={filter} />
        )}
      </div>
      <div className={`${css.item} ${css.number}`}>
        <IconContext.Provider value={{ size: '20px', className: css.icon }}>
          <FiPhone />
        </IconContext.Provider>
        {number}
      </div>
      <button className={css.delete_button} onClick={onContactRemove}>
        <IconContext.Provider value={{ size: '24px' }}>
          <FiX />
        </IconContext.Provider>
      </button>
    </li>
  );
};

export default ContactItem;
