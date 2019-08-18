import React from 'react';
import PropTypes from 'prop-types';

import './SearchField.css';

const SearchField = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Search products here..."
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchField.defaultProps = {
  value: '',
  onChange: () => {},
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchField;
