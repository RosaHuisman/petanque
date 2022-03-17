import { makeTour } from '../selectors/makeTour';

import {
    MAKE_GAME,
    MAKE_FIRST_TOUR,
  } from '../actions/game';
  
  export const initialState = {
    players: [],
    round1: [],
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case MAKE_GAME: {
        return {
          ...state,
          players: action.players 
        }
      }
      
      case MAKE_FIRST_TOUR: {         
        
        return {
          ...state,
          round1: makeTour(state.players)
        }
      }
      
      
      default:
        return state;
    }
  };
  
  export default reducer;
  