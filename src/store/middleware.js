import { LOGIN, saveUser, CHECK_TOKEN } from './actions/authentification';
import { SAVE_GAME_IN_DB } from './actions/game';
import api from './utils/api';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      api({
        method: 'POST',
        url: '/login',
        data: {
          email: state.auth.email,
          password: state.auth.password,
        },
      })
        .then((response) => {
          console.log('response', response);
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => console.log(error));
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
        api({
          method: 'POST',
          url:'/game', 
          data: {
            game: {
              //date of 'now'
              date: new Date(),
              file_id: 2,
              organisator_id: state.auth.id,
            },
            players: state.game.players,
            
          }
        })
          .then((response) => {
            console.log('response', response);
            const payload = { ...response.data };
            console.log('payload', payload);
          })
          .catch((error) => console.log(error));
      
      break;
    }
     

    default:
      next(action);
  }
};

export default middleware;
