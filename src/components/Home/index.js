import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';


const Home = (
  logged,
  ) => {
  return (
    <div className="home">
      <LoginForm />
      
      {logged.logged ? (
        <div className='home-links'>
          <Link 
            to="/nouvellepartie"
            className="home-links-button"
            >
            Nouvelle partie
          </Link>
          <Link 
            to="/historique"
            className='home-links-button'
            >
            Historique (à venir)
          </Link>
        </div>
        ) : null
      }

    </div>
   
);

};



export default Home;