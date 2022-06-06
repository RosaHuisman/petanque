import React from 'react';
import './style.scss';


const Nav = ({
    isLogged,
    showResults,
    players,
    isActive,
    gameIsActive,
    resultIsActive,
    playersIsActive,
    cleanState,
    newGameIsActive
    
}) => {

  const handleResults = (e) => {
    isActive(e.target.name);
    showResults();
  }

   const handleIsActive = (e) => {
     isActive(e.target.name)
  }

  const handleEndGame = (e) => {
    cleanState();
    newGameIsActive();
  }
  
  return (
    <>
    { isLogged ? (
        <div className="navigation">
            <button 
              className={playersIsActive ? "navigation-link active" : "navigation-link"}  
              name="players" 
              onClick={handleIsActive}
              >
                Joueurs
            </button>
            {players.length >= 4 ? (
              <button 
              className={gameIsActive ? "navigation-link active" : "navigation-link"}  
              name="game" 
              onClick={handleIsActive}
              >
                Matchs
            </button>
            ) : null}
            
            
            <button 
            className={resultIsActive ? "navigation-link active" : "navigation-link"}
            name="result"
            onClick={handleResults}
            >
            Resultats 
          </button>

          <button 
            className="navigation-link"
            name="endGame"
            onClick={handleEndGame}
            >
            Fin de la partie 
          </button>
            
        </div>

      ) : null }

      

    </>

  )
};


export default Nav;
