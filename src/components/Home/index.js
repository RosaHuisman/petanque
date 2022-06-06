import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import Nav from '../../containers/Nav';
import MediaQuery from 'react-responsive'
import History from '../../containers/History';
import Results from '../../containers/Results';
import Game from '../../containers/Game';
import NewGame from '../../containers/NewGame';
import Players from '../../containers/Players';
import SideBar from '../../containers/SideBar';


const Home = ({
  logged,
  getGames,
  gameIsActive,
  historyIsActive,
  resultIsActive,
  playersIsActive,
  newGameIsActive,
  players,
  alertIsActive,

}) => {

   const handleGetGames = () => {
     getGames();
    }

  return (
    <>
      <MediaQuery minWidth={481}>
        <div className="home">
          
          <div className='home-sidebar'>
          <SideBar />
          </div>

          <div className='home-content'>            
              {logged && players.length > 0 ? (
              <Nav />
              ) : null
            }
              
              {!logged ? (
              <LoginForm />
              ) : null
            }

              {newGameIsActive && logged ? (
              <NewGame />
              ) : null
            }

            {playersIsActive && logged ? (
              <Players />
              ) : null
            }

            { historyIsActive && logged ? (
              <History />
            ) : null }

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
        
        {logged ? (
          <div className='home-mobile-links'>
            <Link 
              to="/nouvellepartie"
              className="home-mobile-links-button"
              >
              Nouvelle partie
            </Link>
            <Link 
              to="/historique"
              className='home-mobile-links-button'
              onClick={handleGetGames}
              >
              Historique
            </Link>
          </div>
          ) : null
        }

      </div>

      </MediaQuery>
    
    </>
    
   
);

};



export default Home;