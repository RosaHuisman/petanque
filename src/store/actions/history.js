export const GET_GAMES = 'GET_GAMES';
export const SAVE_ALL_GAMES = 'SAVE_ALL_GAMES';
export const RETRIEVE_GAME = 'RETRIEVE_GAME';
export const OPEN_HISTORY = 'OPEN_HISTORY';
export const IS_ACTIVE = 'IS_ACTIVE';

export const getGames = () => ({
  type: GET_GAMES,
});

export const saveAllGames = (allGames) => ({
  type: SAVE_ALL_GAMES,
  allGames
}); 

export const retrieveGame = (gameId) => ({
  type: RETRIEVE_GAME,
  gameId
  });

export const isActive = (name) => ({
  type: IS_ACTIVE,
  name
});


