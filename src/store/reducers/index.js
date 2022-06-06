import { combineReducers } from 'redux';

import authReducer from './authentification';
import gameReducer from './game';
import historyReducer from './history';
import homeReducer from './home';


const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  history: historyReducer,
  home: homeReducer,
  
});

export default rootReducer;
