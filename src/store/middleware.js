import { LOGIN, saveUser } from './actions/authentification';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './../firebase';

import api from './utils/api';

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      signInWithEmailAndPassword(auth, state.auth.email, state.auth.password)
        .then((response) => {
          // Signed in
          console.log(response);
          localStorage.setItem('token', response.user.accessToken);
          api.defaults.headers.common.authorization = `Bearer ${response.user.accessToken}`;
          const actionSaveUser = saveUser(response);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          });
      break;
    }
     

    default:
      next(action);
  }
};

export default middleware;