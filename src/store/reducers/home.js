import {
    IS_ACTIVE,
  } from '../actions/home';
  

  export const initialState = {
    homeIsActive: false,
    gameIsActive: false,
    resultIsActive: false,
    playersIsActive: false,
    dateIsActive: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      

    case IS_ACTIVE:
      return {
        ...initialState,
        [action.name+'IsActive']: true,
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  