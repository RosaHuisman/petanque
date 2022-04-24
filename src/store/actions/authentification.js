export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';


/* export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  value,
  key,
}); */

export const changeValueLogin = (key, value) => ({
  type: CHANGE_VALUE_LOGIN,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const checkToken = () => ({
    type: CHECK_TOKEN,
  });
  