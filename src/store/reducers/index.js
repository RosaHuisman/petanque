import { combineReducers } from 'redux';

import authReducer from './authentification';
import newGameReducer from './newGame';
import gameReducer from './game';
import historyReducer from './history';


const rootReducer = combineReducers({
  auth: authReducer,
  newGame: newGameReducer,
  game: gameReducer,
  history: historyReducer,
  
});

export default rootReducer;
