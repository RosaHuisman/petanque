import {
    SAVE_USER,
    LOGOUT,
    CHANGE_VALUE_LOGIN
  } from '../actions/authentification';
  
  export const initialState = {
    email: '',
    password: '',
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
        console.log('payload dans reducer', action.payload);
        const { email, uid } = action.payload.user;
        return {
          ...state,
          email,
          uid,
          password: '',
          logged: true,
        };
      }
      case LOGOUT: {
        return {
          ...initialState
        }
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  