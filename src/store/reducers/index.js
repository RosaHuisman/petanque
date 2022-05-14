import { combineReducers } from 'redux';

import authReducer from './authentification';
import newGameReducer from './newGame';
import gameReducer from './game';
import historyReducer from './history';
import homeReducer from './home';


const rootReducer = combineReducers({
  auth: authReducer,
  newGame: newGameReducer,
  game: gameReducer,
  history: historyReducer,
  home: homeReducer,
  
});

export default rootReducer;
