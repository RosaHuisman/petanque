import {
    SAVE_ALL_GAMES,
    RETRIEVE_GAME,
    EMPTY_FOUNDED_GAME
  } from '../actions/history';
  

  export const initialState = {
    allGames: [],
    foundedGame: {},

  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      

    case SAVE_ALL_GAMES: 
      return {
        ...state,
        allGames: action.allGames,
      } 
    
    case RETRIEVE_GAME:
      return {
        ...state,
        foundedGame: state.allGames.find(game => game.id === action.gameId),
      }

    case EMPTY_FOUNDED_GAME:
      return {
        ...state,
        foundedGame: {},
      }
      
      
      
      default:
        return state;
    }
  };
  
  export default reducer;
  