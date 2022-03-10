import React from 'react'
import './style.scss';

import { Route, Switch } from 'react-router-dom';

import Home from '../../components/Home'


function App() {
  
  return (
   
    <div className="app">
      
        	<Switch>
        		<Route path="/" exact >
              <Home />
        		</Route>
        	</Switch>
    </div>
  );
}

export default App;