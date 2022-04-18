import { makeTour } from '../selectors/makeTour';
import { enterScores } from '../selectors/enterScores';
import { validScores } from '../selectors/validScores';
import { winAllRounds, winTwoRounds, winOneRound, winNoRound } from '../selectors/endGame';


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
    winAllRounds: [],
    winTwoRounds: [],
    winOneRound: [],
    winNoRound: [],
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
          }
          if (Number(action.roundid) === 1) {
            return {
              ...state,
              round1: enterScores(state.round1, action.player1, action.player2, action.player3, action.value, action.roundid),
              [action.name]: action.value,
              }
          } else if (Number(action.roundid) === 2) {
            return {
              ...state,
              round2: enterScores(state.round2, action.player1, action.player2, action.player3, action.value, action.roundid),
              [action.name]: action.value,
              }
          } else if (Number(action.roundid) === 3) {
            return {
              ...state,
              round3: enterScores(state.round3, action.player1, action.player2, action.player3, action.value, action.roundid),
              [action.name]: action.value,
              }
            }
      
      case VALID_SCORE: {
        }
        if (Number(action.roundid) === 1) {
          return {
            ...state,
            corridorIds1: [...state.corridorIds1, action.corridorId],
            round1: validScores(state.round1, action.corridor, action.roundid),
          }
        } else if (Number(action.roundid) === 2) {
          return {
            ...state,
            corridorIds2: [...state.corridorIds2, action.corridorId],
            round2: validScores(state.round2, action.corridor, action.roundid),
          }
        } else if (Number(action.roundid) === 3) {
          return {
            ...state,
            corridorIds3: [...state.corridorIds3, action.corridorId],
            round3: validScores(state.round3, action.corridor, action.roundid),
          }
        }

      case EDIT_SCORE: {

        if (Number(action.roundid) === 1) {
          return {
            ...state,
            corridorIds1: state.corridorIds1.filter(id => id !== action.corridorId),
          }
        } else if (Number(action.roundid) === 2) {
          return {
            ...state,
            corridorIds2: state.corridorIds2.filter(id => id !== action.corridorId),
          }
        } else if (Number(action.roundid) === 3) {
          return {
            ...state,
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
          //players: endGame(state.players),
          winAllRounds: winAllRounds(state.players),
          winTwoRounds: winTwoRounds(state.players),
          winOneRound: winOneRound(state.players),
          winNoRound: winNoRound(state.players),
        }
      }
      
      default:
        return state;
    }
  };
  
  export default reducer;
  