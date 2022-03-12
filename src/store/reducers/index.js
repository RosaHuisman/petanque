import { combineReducers } from 'redux';

import authReducer from './authentification';
import newGameReducer from './newGame';

const rootReducer = combineReducers({
  auth: authReducer,
  newGame: newGameReducer,
  
});

export default rootReducer;
