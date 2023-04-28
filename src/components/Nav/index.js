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
    handleLogout
    
}) => {

  const handleResults = (e) => {
    isActive(e.target.name);
    showResults();
  }

   const handleIsActive = (e) => {
     isActive(e.target.name)
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
                <button 
                  className={resultIsActive ? "navigation-link active" : "navigation-link"}
                  name="result"
                  onClick={handleResults}
                >
                  Resultats 
                </button>
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
