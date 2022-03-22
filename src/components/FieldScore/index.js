import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FieldScore = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  min,
  max,
  id
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        value={value}
        onChange={handleChange}
        id={id}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />

      <label
        htmlFor={id}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

FieldScore.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
FieldScore.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default FieldScore;
