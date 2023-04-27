import React from 'react'
import PropTypes from 'prop-types';
import './style.scss';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../../containers/Home'
import DateAndPoints from '../../containers/DateAndPoints'



function App({ 
  isLogged,
}) {


  return (
   
    <div className="app">
      
        	<Switch>
        		<Route path="/" exact >
              <Home />
        		</Route>
            <Route path="/nouvellepartie">
              {isLogged ? (
                <DateAndPoints />
              ) : (
              <Redirect to="/" />
              )}
            </Route>
            
        	</Switch>
    </div>
  );
}

App.propTypes = {
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: false,
};

export default App;