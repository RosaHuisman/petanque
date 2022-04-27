import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import middleware from './middleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(middleware)
);

const persistConfig = {
    key: 'root',
    storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
    
let store = createStore(pReducer, enhancers);
  
let persistor = persistStore(store);

const exportedObject = {
    store,
    persistor,
};
    
export default exportedObject;