export const MAKE_GAME = 'MAKE_GAME';
export const MAKE_FIRST_TOUR = 'MAKE_FIRST_TOUR';


export const makeGame = (players) => ({
    type: MAKE_GAME,
    players
    
  });

  export const makeFirstTour = () => ({
    type: MAKE_FIRST_TOUR,
    
    
  });