import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const FieldScore = ({
  type,
  name,
  placeholder,
  onChange,
  min,
  max,
  teamid,
  corridorid,
  roundid,
  player1,
  player2,
  player3,
  value
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name, player1, player2, player3, roundid);
  };

  return (
    
      <div className={value.length > 0 ? 'field-score field-score--has-content' : 'field-score'}>
       
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="field-score-input"
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
        roundid={roundid}
        corridorid={corridorid}
        teamid={teamid}
        player1={player1}
        player2={player2}
        player3={player3}

      />

      <label
        htmlFor={teamid}
        className="field-score-label"
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
