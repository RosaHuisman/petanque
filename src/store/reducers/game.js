import { makeTour } from '../selectors/makeTour';
import { enterScores } from '../selectors/enterScores';
import { validScores } from '../selectors/validScores';
import { winAllRounds, winTwoRounds, winOneRound, winNoRound } from '../selectors/endGame';


import {
    PLAYERS_IN_GAME,
    MAKE_ROUND,
    CHANGE_VALUE_GAME,
    CHANGE_VALUE_SCORE,
    VALID_SCORE,
    SHOW_FIRST_ROUND,
    SHOW_SECOND_ROUND,
    SHOW_THIRD_ROUND,
    EDIT_SCORE,
    END_GAME,
    CLEAN_STATE,
    ADD_PLAYER,
    CHANGE_VALUE,
    EDIT_FORM,
    EDIT_PLAYER,
    DELETE_FORM,
    DELETE_PLAYER,
    LOGOUT,
    SHOW_MESSAGE,
    SHOW_MAKE_ROUND_MESSAGE,
    SET_SCORE_MAX,
    SET_DATE


  } from '../actions/game';
  

  export const initialState = {
    player:'',
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
    editPlayer:'',
    playerId: null,
    showDeletePlayerForm: false,
    showEditPlayerForm: false,
    showSaveMessage: false,
    savedMessage: '',
    showMakeRoundMessage: false,
    scoreMax: 13,
    date: new Date(),

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

      //eslint-disable-next-line
      case CHANGE_VALUE: {
        return {
          ...state,
          [action.key]: action.value,
        };
      };

      case PLAYERS_IN_GAME: {
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
          showMakeRoundMessage: false,
        }
      }

      case CHANGE_VALUE_GAME: {
        return {
          ...state,
          [action.name]: action.value,
        } 
      }

      case CHANGE_VALUE_SCORE: {
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
          break;
        }
      
      case VALID_SCORE: {
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
        break;
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
        break;
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
          winAllRounds: winAllRounds(state.players),
          winTwoRounds: winTwoRounds(state.players),
          winOneRound: winOneRound(state.players),
          winNoRound: winNoRound(state.players),
        }
      }

      case CLEAN_STATE: {
        return {
          ...initialState
        }
      }

      case ADD_PLAYER: {
        let ids = [0];
        state.players.map(player => ids.push(player.id));
        return {
          ...state,
          players: [
            {
              id: (Math.max(...ids) +1),
              name: state.player,
              winRounds: [],
              pointsRound1: 0,
              pointsRound2: 0,
              pointsRound3: 0,
            },
            ...state.players,
          ],
          player: '',
        };
        
      }
  
      case DELETE_FORM: {
        return {
          ...state,
          showDeletePlayerForm: !state.showDeletePlayerForm,
          playerId: action.playerId,
        }
      }
  
      case DELETE_PLAYER: {
        return {
          ...state,
          players: state.players.filter((player) => player.id !== Number(action.playerId)),
          showDeletePlayerForm: !state.showDeletePlayerForm,
        }
      }
  
      case EDIT_FORM: {
        return {
          ...state,
          showEditPlayerForm: !state.showEditPlayerForm,
          playerId: action.playerId,
        }
      }
  
      case EDIT_PLAYER: {
        return {
          ...state,
          players: state.players.map(player => Number(player.id) === Number(action.playerId) ? player = {id: Number(player.id), name: state.editPlayer, score: Number(player.score), winRounds: [], pointsRound1: 0, pointsRound2: 0, pointsRound3: 0} : player),
          editPlayer: '',
          showEditPlayerForm: !state.showEditPlayerForm,
        }
      }
      
      case LOGOUT: {
        return {
          ...initialState
        }
      }

      // eslint-disable-next-line
      case SHOW_MESSAGE: {
        return {
          ...state,
          showSaveMessage: !state.showSaveMessage,
          savedMessage: action.message,
        } 
      };

      // eslint-disable-next-line
      case SHOW_MAKE_ROUND_MESSAGE: {
        return {
          ...state,
          showMakeRoundMessage: !state.showMakeRoundMessage,
        }
      };

      // eslint-disable-next-line
      case SET_SCORE_MAX: {
        return {
          ...state,
          scoreMax: Number(action.scoreMax),
        } 
      };

      // eslint-disable-next-line
      case SET_DATE: {
        return {
          ...state,
          date: action.date,
        }
      };
      
      
      default:
        return state;
    }
  };
  
  export default reducer;
  