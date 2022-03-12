export const SET_GAME_DATE = 'SET_GAME_DATE';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const ADD_PLAYER = 'ADD_PLAYER';
export const DELETE_FORM = 'DELETE_FORM';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const EDIT_FORM = 'EDIT_FORM';
export const EDIT_PLAYER = 'EDIT_PLAYER';


export const setGameDate = (date) => ({
  type: SET_GAME_DATE,
  date
});

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

export const deleteForm = (playerId) => ({
  type: DELETE_FORM,
  playerId
});

export const deletePlayer = (playerId) => ({
  type: DELETE_PLAYER,
  playerId
});

export const editForm = (playerId) => ({
  type: EDIT_FORM,
  playerId
});

export const editPlayer = (playerId) => ({
  type: EDIT_PLAYER,
  playerId
});