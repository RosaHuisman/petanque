import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import './style.scss';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../containers/Home'
import NewGame from '../../containers/NewGame'
import Game from '../../containers/Game'
import Results from '../../containers/Results'


function App({ 
  isLogged,
  checkIsLogged,
}) {

  useEffect(() => {
    checkIsLogged();
  }, []);

  
  return (
   
    <div className="app">
      
        	<Switch>
        		<Route path="/" exact >
              <Home />
        		</Route>
            <Route path="/nouvellepartie">
              {isLogged ? (
                <NewGame />
              ) : (
              <Redirect to="/" />
              )}
            </Route>
            <Route path="/jeu">
              {isLogged ? (
                <Game />
              ) : (
              null
              )}
            </Route>
            <Route path="/resultats">
              {isLogged ? (
                <Results />
              ) : (
              null
              )}
            </Route>
            
        	</Switch>
    </div>
  );
}

App.propTypes = {
  isLogged: PropTypes.bool,
  checkIsLogged: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLogged: false,
};

export default App;