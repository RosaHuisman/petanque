import { makeTour } from '../selectors/makeTour';

import {
    MAKE_GAME,
    MAKE_FIRST_TOUR,
    CHANGE_VALUE,
    VALID_SCORE
  } from '../actions/game';
  
  export const initialState = {
    players: [],
    round1: [],
    scores: [],
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

      case CHANGE_VALUE: {
        return {
          ...state,
          scores: {
            ...state.scores,
            [action.name]: action.value
          },
          
        };
      }

      case VALID_SCORE: {
        console.log(action.id1);
        console.log(action.id2);
        console.log(state.players);
        // ici faire une fonction qui va rentrer le score des joueurs dans le state.players, avec un true ou false s'ils ont gagné ou non la partie
        return {
          ...state
        }
      }
      
      
      default:
        return state;
    }
  };
  
  export default reducer;
  