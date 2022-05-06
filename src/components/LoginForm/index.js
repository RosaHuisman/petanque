import React from 'react';
import PropTypes from 'prop-types';

import Field from '../../containers/Field';

import './style.scss';

const LoginForm = ({
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <>
      {isLogged && (
        <div className="logged">
            <p className="logged-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="logged-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
        </div>
      )}
      
      
      {!isLogged && (
        <div className="login-form">
          <form autoComplete="off" onSubmit={handleSubmit}>
            
            <Field
              name="firstName"
              placeholder="Prénom"
              onChange={changeField}
              className="login-form-input"
            />
            
            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              className="login-form-input"
            />
            <button
              type="submit"
              className="login-form-button"
              
            >
              Connexion
            </button>
          </form>
        </div>
      )}
          
    </>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
