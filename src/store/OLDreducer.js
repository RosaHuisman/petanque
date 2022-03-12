import {
  SET_GAME_DATE,
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT,
  ADD_PLAYER,
  DELETE_FORM,
  DELETE_PLAYER,
  EDIT_FORM,
  EDIT_PLAYER,
} from './OLDactions';

export const initialState = {
  date: '',
  email: 'rosahuisman@hotmail.fr',
  password: 'rosa',
  pseudo: 'Rosa',
  logged: false,
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
        date: action.date, 
      }
    }
    
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_USER: {
      const { pseudo, logged } = action.payload;
      return {
        ...state,
        pseudo,
        logged,
        email: '',
        password: '',
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
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
            score: 0,
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
        players: state.players.map(player => player.id == action.playerId ? player = {id: Number(player.id), name: state.editPlayer, score: Number(player.score)} : player),
        editPlayer: '',
        showEditPlayerForm: !state.showEditPlayerForm,

      }
      
    }
    
    default:
      return state;
  }
};

export default reducer;