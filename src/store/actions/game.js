export const CHANGE_VALUE = 'CHANGE_VALUE';
export const MAKE_GAME = 'MAKE_GAME';
export const MAKE_ROUND = 'MAKE_ROUND';
export const VALID_SCORE = 'VALID_SCORE';
export const SHOW_FIRST_ROUND = 'SHOW_FIRST_ROUND';
export const SHOW_SECOND_ROUND = 'SHOW_SECOND_ROUND';
export const SHOW_THIRD_ROUND = 'SHOW_THIRD_ROUND';
export const EDIT_SCORE = 'EDIT_SCORE';

export const changeValue = (name, value, player1, player2, roundid) => ({
  type: CHANGE_VALUE,
  value,
  name,
  player1,
  player2,
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

  export const validScore = (corridorId, idTeam1, idTeam2) => ({
    type: VALID_SCORE,
    corridorId,
    idTeam1,
    idTeam2
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

  export const editScore = (corridorId) => ({
    type: EDIT_SCORE,
    corridorId
  });