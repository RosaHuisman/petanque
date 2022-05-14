import { LOGIN, saveUser, CHECK_TOKEN } from './actions/authentification';
import { SAVE_GAME_IN_DB } from './actions/game';
import { GET_GAMES, saveAllGames } from './actions/history';
import { clearNewGameState } from './actions/newGame';

import api from './utils/api';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      api({
        method: 'POST',
        url: '/login',
        data: {
          firstName: state.auth.firstName,
          password: state.auth.password,
        },
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
          store.dispatch(clearNewGameState())
        })
        .catch((error) => {
            console.log(error)
          });
      break;
    }
    case CHECK_TOKEN: {
      const token = localStorage.getItem('token');

      if (token) {
        api.get('/checkToken', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            const payload = { ...response.data };
            const actionSaveUser = saveUser(payload);
            store.dispatch(actionSaveUser);
          })
          .catch((error) => console.log(error));
      }
      break;
    }
    case SAVE_GAME_IN_DB: {
      const state = store.getState();
      // for each player of players, remove the id
      let players = state.game.players.map((player) => {
        const { id, ...rest } = player;
        return rest;
      });
         api({
          method: 'POST',
          url:'/game', 
          data: {
            game: {
              //date of 'now'
              date: new Date(),
              organisator_id: state.auth.id,
            },
            players: players,
            
          }
        })
          .then((response) => {
            const payload = { ...response.data };
            console.log(payload);

          })
          .catch((error) => console.log(error)); 
      
      break;
    }

    case GET_GAMES: {
      const state = store.getState();
      api({
        method: 'GET',
        url:'/game',
        headers: {
          authorization: `Bearer ${state.auth.token}`,
        }
      })
        .then((response) => {
          const payload = [ ...response.data ];
          store.dispatch(saveAllGames(payload));
        })
        .catch((error) => console.log(error));
      break;
    }

     

    default:
      next(action);
  }
};

export default middleware;