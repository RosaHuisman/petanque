import React from 'react';
//import PropTypes from 'prop-types';
import { winAllRounds, winTwoRounds, winOneRound, winNoRound } from '../../store/selectors/history';
//import Nav from '../../containers/Nav';

import './style.scss';

const History = ({
  allGames,
  retrieveGame,
  foundedGame,
}) => {
 
const handleOnChange = (evt) => {
  console.log(evt.target.value);
  retrieveGame(evt.target.value);
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
          <div>
            <select id="history"  onChange={handleOnChange} className="history-select">
              <option value="">Choisis une partie</option>
              {allGames.map(game => (
                  <option value={game.id} key={game.id} date={game.date}>{new Date(game.date).toLocaleDateString("fr-FR", dateOptions)}</option>
                ))
              }
            </select>
          </div>

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
                    <td> {(winTwoRounds(foundedGame.players)).indexOf(player) + 1 + winAllRounds(foundedGame.players).length} </td>
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
                    <td> {(winOneRound(foundedGame.players)).indexOf(player) + 1 + winAllRounds(foundedGame.players).length + winTwoRounds(foundedGame.players).length} </td>
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
                  <td> {(winNoRound(foundedGame.players)).indexOf(player) + 1 + winAllRounds(foundedGame.players).length + winTwoRounds(foundedGame.players).length + winOneRound(foundedGame.players).length} </td>
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
  );
};

History.propTypes = {
  
};


// == Export
export default History;
