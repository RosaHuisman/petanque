export const CHANGE_VALUE_GAME = 'CHANGE_VALUE_GAME';
export const CHANGE_VALUE_SCORE = 'CHANGE_VALUE_SCORE';
export const PLAYERS_IN_GAME = 'PLAYERS_IN_GAME';
export const MAKE_ROUND = 'MAKE_ROUND';
export const VALID_SCORE = 'VALID_SCORE';
export const SHOW_FIRST_ROUND = 'SHOW_FIRST_ROUND';
export const SHOW_SECOND_ROUND = 'SHOW_SECOND_ROUND';
export const SHOW_THIRD_ROUND = 'SHOW_THIRD_ROUND';
export const EDIT_SCORE = 'EDIT_SCORE';
export const END_GAME = 'END_GAME';
export const SAVE_GAME_IN_DB = 'SAVE_GAME_IN_DB';
export const CLEAN_STATE = 'CLEAN_STATE';
export const ADD_PLAYER = 'ADD_PLAYER';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const DELETE_FORM = 'DELETE_FORM';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const EDIT_FORM = 'EDIT_FORM';
export const EDIT_PLAYER = 'EDIT_PLAYER';
export const CLEAR_STATE = 'CLEAR_STATE';
export const LOGOUT = 'LOGOUT';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const SHOW_MAKE_ROUND_MESSAGE = 'SHOW_MAKE_ROUND_MESSAGE';
export const SET_SCORE_MAX = 'SET_SCORE_MAX';
export const SET_DATE = 'SET_DATE';


export const changeValueGame = (name, value, player1, player2, player3, roundid) => ({
  type: CHANGE_VALUE_GAME,
  value,
  name,
  player1,
  player2,
  player3,
  roundid,
});

export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const changeValueScore = (name, value, player1, player2, player3, roundid) => ({
  type: CHANGE_VALUE_SCORE,
  value,
  name,
  player1,
  player2,
  player3,
  roundid,
});

export const setPlayersInGame = (players) => ({
    type: PLAYERS_IN_GAME,
    players
    
  });

  export const makeRound = (id) => ({
    type: MAKE_ROUND,
    id
  });

  export const validScore = (corridorId, idTeam1, idTeam2, roundid, corridor) => ({
    type: VALID_SCORE,
    corridorId,
    idTeam1,
    idTeam2,
    roundid,
    corridor
  });

  export const showFirstRound = () => ({
    type: SHOW_FIRST_ROUND,
  });
  
  export const showSecondRound = () => ({
    type: SHOW_SECOND_ROUND,
  });

  export const showThirdRound = () => ({
    type: SHOW_THIRD_ROUND,
  });

  export const editScore = (corridorId, roundid) => ({
    type: EDIT_SCORE,
    corridorId,
    roundid
  });

  export const endGame = () => ({
    type: END_GAME,
  });

  export const saveGameInDB = () => ({
    type: SAVE_GAME_IN_DB,
  });

  export const cleanState = () => ({
    type: CLEAN_STATE,
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
  
  export const logout = () => ({
    type: LOGOUT,
  });
  
  export const saveMessage = (message) => ({
    type: SHOW_MESSAGE,
    message
  });

  export const hideSaveMessage = () => ({
    type: SHOW_MESSAGE,
  });

  export const showMakeRoundMessage = () => ({
    type: SHOW_MAKE_ROUND_MESSAGE,
  });
  
  export const setScoreMax = (scoreMax) => ({
    type: SET_SCORE_MAX,
    scoreMax
  });

  export const setDate = (date) => ({
    type: SET_DATE,
    date
  });
  
  