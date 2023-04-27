import { combineReducers } from 'redux';

import authReducer from './authentification';
import gameReducer from './game';
import homeReducer from './home';


const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  home: homeReducer,
  
});

export default rootReducer;
