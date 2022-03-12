import {
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT,
  ADD_PLAYER,
  DELETE_PLAYER,
} from '../store/actions';

export const initialState = {
  email: 'rosahuisman@hotmail.fr',
  password: 'rosa',
  pseudo: 'Rosa',
  logged: false,
  player: '',
  players: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
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
      console.log(ids)
      console.log(Math.max(...ids) +1)
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

    case DELETE_PLAYER: {
      console.log(action.playerId);
      return {
        ...state,
        players: state.players.filter((player) => player.id !== Number(action.playerId)),
      }
    }
    
    default:
      return state;
  }
};

export default reducer;
