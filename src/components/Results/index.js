import React from "react";
import './style.scss';

const Results = ({
  players,
  winAllRounds,
  winTwoRounds,
  winOneRound,
  winNoRound,
  
}) => {

  console.log(players);

  return (
    <div className="results">
      <p> Les résultats </p>
      <table className="table">
        <thead>
          <tr>
            <td> Classement </td>
            <td> Nom </td>
            <td> score partie 1 </td>
            <td> score partie 2 </td>
            <td> score partie 3 </td>
            <td> score final </td>
          </tr>
        </thead>
        <tbody>
        {winAllRounds.map((player) => (
          <tr>
            <td> {winAllRounds.indexOf(player) + 1} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} </td>
            <td> {player.scoreRound2} </td>
            <td> {player.scoreRound3} </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winTwoRounds.map((player) => (
          <tr>
            <td> {winTwoRounds.indexOf(player) + 1 + winAllRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} </td>
            <td> {player.scoreRound2} </td>
            <td> {player.scoreRound3} </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winOneRound.map((player) => (
          <tr>
            <td> {winOneRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} </td>
            <td> {player.scoreRound2} </td>
            <td> {player.scoreRound3} </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winNoRound.map((player) => (
          <tr>
            <td> {winNoRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} </td>
            <td> {player.scoreRound2} </td>
            <td> {player.scoreRound3} </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
        </tbody>
      </table>
      
      
      
    </div>

  );

};

export default Results;