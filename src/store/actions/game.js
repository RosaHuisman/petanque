export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_VALUE_SCORE = 'CHANGE_VALUE_SCORE';
export const MAKE_GAME = 'MAKE_GAME';
export const MAKE_ROUND = 'MAKE_ROUND';
export const VALID_SCORE = 'VALID_SCORE';
export const SHOW_FIRST_ROUND = 'SHOW_FIRST_ROUND';
export const SHOW_SECOND_ROUND = 'SHOW_SECOND_ROUND';
export const SHOW_THIRD_ROUND = 'SHOW_THIRD_ROUND';
export const EDIT_SCORE = 'EDIT_SCORE';
export const END_GAME = 'END_GAME';
export const SAVE_GAME_IN_DB = 'SAVE_GAME_IN_DB';
export const CLEAN_STATE = 'CLEAN_STATE';

export const changeValue = (name, value, player1, player2, player3, roundid) => ({
  type: CHANGE_VALUE,
  value,
  name,
  player1,
  player2,
  player3,
  roundid,
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

export const makeGame = (players) => ({
    type: MAKE_GAME,
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
    type: 'CLEAN_STATE',
  });