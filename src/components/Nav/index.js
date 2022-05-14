import React from 'react';
import History from '../../containers/History';
import { Link } from 'react-router-dom';
import './style.scss';


const Nav = ({
    isLogged,
    loggedMessage,
    handleLogout,
    showResults,
    getGames,
    historyOpen,
    isActive,
    homeIsActive,
    gameIsActive,
    historyIsActive,
    resultIsActive,
    
}) => {

  const handleResults = (e) => {
    isActive(e.target.name);
    showResults();
  }

  const handleHistory = (e) => {
    isActive(e.target.name);
    getGames();
   }

   const handleIsActive = (e) => {
     isActive(e.target.name)
  }
  
  return (
    <>

    { isLogged ? (

    <nav className="navbar navbar-expand-lg navbar-light justify-content-between mb-5">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <a className={homeIsActive ? "nav-link active " : "nav-link"} href="/" name="home" onClick={handleIsActive}>Accueil</a>
              </li>
              <li className="nav-item">
                  <a className={gameIsActive ? "nav-link active" : "nav-link"} href="/jeu" name="game" onClick={handleIsActive}>Jeu</a>
              </li>
              <li className="nav-item">
                  <a className={resultIsActive ? "nav-link active" : "nav-link"} href="/resultats" name="result" onClick={handleResults}>Résultats</a>
              </li>
              <li className="nav-item">
                <Link 
                to="/historique"
                className={historyIsActive ? "nav-link active" : "nav-link"}
                name="history"
                onClick={handleHistory}
                >
                Historique
              </Link>
              </li>
              
            </ul>
        </div>
        <div className="logged">
            <p className="logged-message">
              {loggedMessage}
            </p>
            <button
              type="button"
              className="logged-button"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
        </div>
    </nav>

      ) : null }

      { historyOpen ? (
        <History />
      ) : null }



    </>

  )
};


export default Nav;
