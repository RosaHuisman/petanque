import { LOGIN, saveUser, CHECK_TOKEN } from './actions';
import api from './utils/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      api({
        method: 'POST',
        url: '/login',
        data: {
          email: state.email,
          password: state.password,
        },
      })
        .then((response) => {
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
    default:
      next(action);
  }
};

export default auth;
