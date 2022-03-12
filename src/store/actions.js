export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const ADD_PLAYER = 'ADD_PLAYER';
export const DELETE_PLAYER = 'DELETE_PLAYER';

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
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

export const addPlayer = () => ({
  type: ADD_PLAYER,
});

export const deletePlayer = (playerId) => ({
  type: DELETE_PLAYER,
  playerId
});