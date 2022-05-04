import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { winAllRounds, winTwoRounds, winOneRound, winNoRound } from '../../store/selectors/history';

import './style.scss';

const History = ({
  allGames,
  retrieveGame,
  foundedGame,
  emptyFoundedGame
}) => {
 
const handleOnClick = (gameId) => {
  retrieveGame(gameId);
}

const handleBack = () => {
  emptyFoundedGame()
}

function isObjEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

// obtenir le jour de la semaine avec une date longue
let dateOptions = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

  return (
    <div className='history'>
      <p className='history-title'> Historique </p>
      <div className='history-content'>
      <nav className='history-content-nav'>
          
            {allGames.map(game => (
              <button 
                key={game.id} 
                onClick={() => handleOnClick(game.id)} 
                className='history-content-nav-item'
              >
                  {new Date(game.date).toLocaleDateString("fr-FR", dateOptions)}
              </button>
            ))}
          
      </nav>
        
      <div> 
        {isObjEmpty(foundedGame) ? null : (
          
            <table className="history-content-table">
              <thead className="history-content-table-head">
                <tr className="history-content-table-head-row">
                  <td> Classement </td>
                  <td> Nom </td>
                  <td> score partie 1 </td>
                  <td> score partie 2 </td>
                  <td> score partie 3 </td>
                  <td> score final </td>
                </tr>
              </thead>
              <tbody className="history-content-table-body">
              {(winAllRounds(foundedGame.players)).map((player) => (
                <tr className="history-content-table-body-player">
                  <td> {(winAllRounds(foundedGame.players)).indexOf(player) + 1} </td>
                  <td> {player.name} </td>
                  <td> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
                  <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
                  <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
                  <td> {player.totalPoints} </td>
                </tr>
              
            ))}
              </tbody>
              <tbody className="history-content-table-body">
              {(winTwoRounds(foundedGame.players)).map((player) => (
                  <tr className="history-content-table-body-player">
                    <td> {(winTwoRounds(foundedGame.players)).indexOf(player) + 1 + winAllRounds.length} </td>
                    <td> {player.name} </td>
                    <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
                    <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
                    <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
                    <td> {player.totalPoints} </td>
                  </tr>
                
              ))}
              </tbody>
              <tbody className="history-content-table-body">
              {(winOneRound(foundedGame.players)).map((player) => (
                  <tr className="history-content-table-body-player">
                    <td> {(winOneRound(foundedGame.players)).indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </td>
                    <td> {player.name} </td>
                    <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
                    <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
                    <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
                    <td> {player.totalPoints} </td>
                  </tr>
                
              ))}
              </tbody>
              <tbody className="history-content-table-body">
            {(winNoRound(foundedGame.players)).map((player) => (
                <tr className="history-content-table-body-player">
                  <td> {(winNoRound(foundedGame.players)).indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </td>
                  <td> {player.name} </td>
                  <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
                  <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
                  <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
                  <td> {player.totalPoints} </td>
                </tr>
              
            ))}
              </tbody>
            </table>
          
        )}  
       </div>
      </div>
      

      <Link 
            to="/"
            className="history-back"
            onClick={handleBack}
            >
            Retour
      </Link> 
      
    </div>
  );
};

History.propTypes = {
  
};


// == Export
export default History;
