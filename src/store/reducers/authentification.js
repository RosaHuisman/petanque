import {
    SAVE_USER,
    LOGOUT,
  } from '../actions/authentification';
  
  export const initialState = {
    email: 'rosahuisman@hotmail.fr',
    password: 'rosa',
    pseudo: 'Rosa',
    logged: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case SAVE_USER: {
        const { pseudo, logged } = action.payload;
        return {
          ...state,
          pseudo,
          logged,
          email: '',
          password: '',
        };
      }
      case LOGOUT: {
        return {
          ...initialState,
        };
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  