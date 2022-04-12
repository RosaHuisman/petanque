import { makeTour } from '../selectors/makeTour';
import { validPlayersScore } from '../selectors/validPlayersScore';
import { enterScores } from '../selectors/enterScores';


import {
    MAKE_GAME,
    MAKE_ROUND,
    CHANGE_VALUE,
    CHANGE_VALUE_SCORE,
    VALID_SCORE,
    SHOW_FIRST_ROUND,
    SHOW_SECOND_ROUND,
    SHOW_THIRD_ROUND,
    EDIT_SCORE,
    END_GAME
  } from '../actions/game';
  
  export const initialState = {
    players: [],
    round1: [],
    round2: [],
    round3: [],
    round1Open: false,
    round2Open: false,
    round3Open: false,
    corridorIds1: [0],
    corridorIds2: [0],
    corridorIds3: [0],
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
          //corridorIds: [0],
          scoreIsEntered: false,
        }
      }

      case CHANGE_VALUE: {
          return {
            ...state,
            [action.name]: action.value,
          } 
        };
      
        case CHANGE_VALUE_SCORE: {
          function roundInState(actionRoundId) {
            if (actionRoundId == 1) {
              return state.round1;
            }
            if (actionRoundId == 2) {
              return state.round2;
            }
            if (actionRoundId == 3) {
              return state.round3;
            }
          }
     
            return {
              ...state,
              ['round'+action.id]: enterScores(roundInState(action.roundid), action.player1, action.player2, action.value),
              [action.name]: action.value,
            } 
          };
      
      case VALID_SCORE: {
        }

        if (action.roundid == 1) {
          return {
            ...state,
            scoreIsEntered: true,
            corridorIds1: [...state.corridorIds1, action.corridorId],
          }
        } else if (action.roundid == 2) {
          return {
            ...state,
            scoreIsEntered: true,
            corridorIds2: [...state.corridorIds2, action.corridorId],
          }
        } else if (action.roundid == 3) {
          return {
            ...state,
            scoreIsEntered: true,
            corridorIds3: [...state.corridorIds3, action.corridorId],
          }
        }

      case EDIT_SCORE: {
        function roundInState(actionRoundId) {
          if (actionRoundId == 1) {
            return 'state.corridorIds1';
          }
          if (actionRoundId == 2) {
            return 'state.corridorIds2';
          }
          if (actionRoundId == 3) {
            return 'state.corridorIds3';
          }
        }

        if (action.roundid == 1) {
          return {
            ...state,
            //scoreIsEntered: true,
            corridorIds1: state.corridorIds1.filter(id => id !== action.corridorId),
          }
        } else if (action.roundid == 2) {
          return {
            ...state,
            //scoreIsEntered: true,
            corridorIds2: state.corridorIds2.filter(id => id !== action.corridorId),
          }
        } else if (action.roundid == 3) {
          return {
            ...state,
            //scoreIsEntered: true,
            corridorIds3: state.corridorIds3.filter(id => id !== action.corridorId),
          }
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

      case END_GAME: {
        return {
          ...state,
          //test: validPlayersScore(state.players, state.round1, state.round2, state.round3),
        }
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  