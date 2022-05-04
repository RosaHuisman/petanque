export const GET_GAMES = 'GET_GAMES';
export const SAVE_ALL_GAMES = 'SAVE_ALL_GAMES';
export const RETRIEVE_GAME = 'RETRIEVE_GAME';
export const EMPTY_FOUNDED_GAME = 'EMPTY_FOUNDED_GAME';

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

export const emptyFoundedGame = () => ({
  type: EMPTY_FOUNDED_GAME,
})