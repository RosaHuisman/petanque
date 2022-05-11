import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import Nav from '../../containers/Nav';
import MediaQuery from 'react-responsive'


const Home = ({
  logged,
  getGames,
  cleanState,

}) => {

  const handleStartGame = () => {
    cleanState();
  } 

   const handleGetGames = () => {
     getGames();
    }

  return (
    <>
      <MediaQuery minWidth={481}>
        <div className="home">
        <Nav />

        <LoginForm />
        
        {logged ? (

          <div className='home-links'>
            <Link 
              to="/nouvellepartie"
              className="home-links-button"
              onClick={handleStartGame}
              >
              Nouvelle partie
            </Link>
            <Link 
              to="/historique"
              className='home-links-button'
              onClick={handleGetGames}
              >
              Historique
            </Link>
          </div>

          ) : null
        }

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