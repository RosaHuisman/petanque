import React from 'react';
import './style.scss';



const SideBar = ({
    isLogged,
    loggedMessage,
    handleLogout,
    getGames,
    isActive,
    newGameIsActive,
    historyIsActive,
    emptyState,
    players,
    
    
}) => {

  const handleHistory = (e) => {
    isActive(e.target.name);
    getGames();
   }

   const handleNewGame = (e) => {
     if (players.length > 0 ) {
        alert('Une partie est en cours, veuillez la terminer avant de créer une nouvelle partie.');
     } else {
      isActive(e.target.name);
      emptyState();
     }
  }

  
  
  return (
    <>

    { isLogged ? (

    <nav className="sidebar">
      <div>
        <p className="sidebar-logged_message"> {loggedMessage} </p>
            
        <button 
          className={newGameIsActive ? "sidebar-link active " : "sidebar-link"}  
          name="newGame" 
          onClick={handleNewGame}
          >
            Nouvelle partie
        </button>

        <button 
          className={historyIsActive ? "sidebar-link active " : "sidebar-link"}
          name="history"
          onClick={handleHistory}
          >
          Historique
        </button>
      </div>
      <div>
          <button
            type="button"
            className="sidebar-unlogged_button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
      </div>
        
    </nav>

      ) : null }

      

    </>

  )
};


export default SideBar;
