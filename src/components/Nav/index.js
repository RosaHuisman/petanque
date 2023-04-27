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
    dateIsActive,
    cleanState,
    handleLogout
    
}) => {

  const handleResults = (e) => {
    isActive(e.target.name);
    showResults();
  }

   const handleIsActive = (e) => {
     isActive(e.target.name)
  }

  const handleEndGame = (e) => {
    // alert pour confirmer la fin de la partie
    if (window.confirm('Etes vous sur de vouloir terminer la partie ?')) {
      cleanState();
      dateIsActive();
    } 
  }
  
  return (
    <>
    { isLogged ? (
        <div className="navigation">
            <div className='navigation__left'>
                <button 
                  className={dateIsActive ? "navigation-link active" : "navigation-link"}  
                  name="date" 
                  onClick={handleIsActive}
                  >
                    Date
                </button>
              
              {!dateIsActive || gameIsActive || playersIsActive || resultIsActive || players.length > 0 ? (
                <button 
                  className={playersIsActive ? "navigation-link active" : "navigation-link"}  
                  name="players" 
                  onClick={handleIsActive}
                  >
                    Joueurs
                </button>
              ) : null
              }

              {players.length >= 4 ? (
                <button 
                className={gameIsActive ? "navigation-link active" : "navigation-link"}  
                name="game" 
                onClick={handleIsActive}
                >
                  Matchs
              </button>
              ) : null}
              
              {gameIsActive || resultIsActive ? ( 
              <>
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
              </>
              ) : null
            }
           </div>
           <div className='navigation__right'>
            <button
              type="button"
              className="navigation-link"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
            
        </div>

      ) : null }

      

    </>

  )
};


export default Nav;
