import { combineReducers } from 'redux';

import authReducer from './authentification';
import newGameReducer from './newGame';
import gameReducer from './game';


const rootReducer = combineReducers({
  auth: authReducer,
  newGame: newGameReducer,
  game: gameReducer,
  
});

export default rootReducer;
