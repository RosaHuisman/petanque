import React from 'react'
import './style.scss';
import LoginForm from '../../containers/LoginForm';
import Nav from '../../containers/Nav';
import MediaQuery from 'react-responsive'
import Results from '../../containers/Results';
import Game from '../../containers/Game';
import DateAndPoints from '../../containers/DateAndPoints';
import Players from '../../containers/Players';


const Home = ({
  logged,
  gameIsActive,
  resultIsActive,
  playersIsActive,
  dateIsActive,

}) => {

  return (
    <>
      <MediaQuery minWidth={481}>
        <div className="home">

          <div className='home-content'>            
              {logged ? (
              <Nav />
              ) : null
            }
              
              {!logged ? (
              <LoginForm />
              ) : null
            }

              {dateIsActive && logged ? (
              <DateAndPoints />
              ) : null
            }

            {playersIsActive && logged ? (
              <Players />
              ) : null
            }

            { resultIsActive && logged ? (
              <Results />
            ) : null }

            { gameIsActive && logged ? (
              < Game />
                ) : null }
          </div>
      </div>

      </MediaQuery>


      <MediaQuery minWidth={0} maxWidth={480}>
      <div className="home-mobile">
        <LoginForm />
      </div>

      </MediaQuery>
    
    </>
    
   
);

};



export default Home;