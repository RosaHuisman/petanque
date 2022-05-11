import React from 'react';

const Nav = ({
    isLogged,
    loggedMessage,
    handleLogout,
    
}) => {
  
  return (
    <>

    { isLogged ? (

    <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="/">Accueil <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/jeu">Jeu</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/resultats">Résultats</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/historique">Historique</a>
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

    </>

  )
};


export default Nav;
