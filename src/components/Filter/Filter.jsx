import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch, FiX } from 'react-icons/fi';
import css from './Filter.module.css';

const Filter = ({ value, onFilterChange, onFilterClear }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.search}>
        <IconContext.Provider value={{ size: '24px' }}>
          <FiSearch />
        </IconContext.Provider>
      </div>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilterChange}
        placeholder="Enter your search keyword"
      />
      {value && (
        <button className={css.clear} type="button" onClick={onFilterClear}>
          <IconContext.Provider value={{ size: '24px' }}>
            <FiX />
          </IconContext.Provider>
        </button>
      )}
    </div>
  );
};

export default Filter;
