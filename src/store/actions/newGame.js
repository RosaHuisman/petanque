export const SET_GAME_DATE = 'SET_GAME_DATE';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_PLAYER = 'ADD_PLAYER';
export const DELETE_FORM = 'DELETE_FORM';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const EDIT_FORM = 'EDIT_FORM';
export const EDIT_PLAYER = 'EDIT_PLAYER';
export const CLEAR_STATE = 'CLEAR_STATE';

export const setGameDate = () => ({
  type: SET_GAME_DATE,
  });

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  value,
  key,
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

export const clearNewGameState = () => ({
  type: CLEAR_STATE,
  
});