import {
    SET_GAME_DATE,
    CHANGE_VALUE,
    ADD_PLAYER,
    DELETE_FORM,
    DELETE_PLAYER,
    EDIT_FORM,
    EDIT_PLAYER,
    CLEAR_STATE,
    LOGOUT
  } from '../actions/newGame';
  
  export const initialState = {
    player: '',
    editPlayer:'',
    playerId: null,
    players: [],
    showDeletePlayerForm: false,
    showEditPlayerForm: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case SET_GAME_DATE: {
        return {
          ...state,
        }
      }
      
      case CHANGE_VALUE: {
        return {
          ...state,
          [action.key]: action.value,
        };
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

      case CLEAR_STATE: {
        return {
          ...state,
          players: [],
          player: '',
        }
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
  