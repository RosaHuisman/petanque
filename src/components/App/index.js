import React from 'react'
import './style.scss';

import { Route, Switch } from 'react-router-dom';

import Header from '../../components/Header'


function App() {
  
  return (
   
    <div className="app">
      
        	<Switch>
        		<Route path="/" exact >
              <Header />
        		</Route>
        	</Switch>
    </div>
  );
}

export default App;