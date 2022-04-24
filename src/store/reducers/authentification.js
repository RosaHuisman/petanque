import {
    SAVE_USER,
    LOGOUT,
    CHANGE_VALUE_LOGIN
  } from '../actions/authentification';
  
  export const initialState = {
    email: '',
    password: '',
    firstName: '',
    id: null,
    logged: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case CHANGE_VALUE_LOGIN:
        return {
          ...state,
          [action.key]: action.value,
        };
  
      case SAVE_USER: {
        const { email, firstName, logged, id } = action.payload;
        return {
          ...state,
          firstName,
          logged,
          email,
          id,
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
  