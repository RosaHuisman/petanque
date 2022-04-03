import { makeTour } from '../selectors/makeTour';
import { validPlayersScore } from '../selectors/validPlayersScore';
import { enterScores } from '../selectors/enterScores';


import {
    MAKE_GAME,
    MAKE_ROUND,
    CHANGE_VALUE,
    VALID_SCORE,
    SHOW_FIRST_ROUND,
    SHOW_SECOND_ROUND,
    SHOW_THIRD_ROUND,
    EDIT_SCORE
  } from '../actions/game';
  
  export const initialState = {
    players: [],
    round1: [],
    round2: [],
    round3: [],
    round1Open: false,
    round2Open: false,
    round3Open: false,
    corridorIds: [0],
    scoreIsEntered: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case MAKE_GAME: {
        return {
          ...state,
          players: action.players,
        }
      }
      
      case MAKE_ROUND: {         
        return {
          ...state,
          ['round'+action.id]: makeTour(state.players),
        }
      }

      case CHANGE_VALUE: {       
          return {
            ...state,
            ['round'+action.id]: enterScores(state.round1, action.player1, action.player2, action.value),
            [action.name]: action.value,
          } 
        };
      
      
      case VALID_SCORE: {
        return {
          ...state,
          scoreIsEntered: true,
          corridorIds: [...state.corridorIds, action.corridorId],
        }
      }

      case EDIT_SCORE: {
        console.log(action.corridorId);
        return {
          ...state,
          corridorIds: state.corridorIds.filter(id => id !== action.corridorId),
        }
      }

      case SHOW_FIRST_ROUND: {
        return {
          ...state,
          round1Open: true,
          round2Open: false,
          round3Open: false

        }
      }
      
      case SHOW_SECOND_ROUND: {
        return {
          ...state,
          round2Open: true,
          round1Open: false,
          round3Open: false
        }
      }

      case SHOW_THIRD_ROUND: {
        return {
          ...state,
          round3Open: true,
          round2Open: false,
          round1Open: false
        }
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  