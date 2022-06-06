import {
    IS_ACTIVE,
  } from '../actions/history';
  

  export const initialState = {
    homeIsActive: false,
    gameIsActive: false,
    historyIsActive: false,
    resultIsActive: false,
    playersIsActive: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      

    case IS_ACTIVE:
      return {
        ...initialState,
        //[action.name+'IsActive']: !state[action.name+'IsActive'],
        [action.name+'IsActive']: true,
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  