export const CHANGE_VALUE = 'CHANGE_VALUE';
export const MAKE_GAME = 'MAKE_GAME';
export const MAKE_FIRST_TOUR = 'MAKE_FIRST_TOUR';
export const VALID_SCORE = 'VALID_SCORE';

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  value,
  name
});

export const makeGame = (players) => ({
    type: MAKE_GAME,
    players
    
  });

  export const makeFirstTour = () => ({
    type: MAKE_FIRST_TOUR,
  });

  export const validScore = (id1, id2) => ({
    type: VALID_SCORE,
    id1,
    id2
  });