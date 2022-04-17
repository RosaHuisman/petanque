import React from "react";
import './style.scss';

const Results = ({
  players,
  
}) => {

  console.log(players);
  players.map((player) => {
    console.log(player.winRounds[0])
  })

  return (
    <div className="results">
      <p> Les résultats </p>
      <table className="table">
        <thead>
          <tr>
            <td> Nom </td>
            <td> score partie 1 </td>
            <td> score partie 2 </td>
            <td> score partie 3 </td>
            <td> parties gagnées </td>
            <td> score final </td>
          </tr>
        </thead>
        <tbody>
        {players.map((player) => (
          <tr>
            <td> {player.name} </td>
            <td> {player.scoreRound1} </td>
            <td> {player.scoreRound2} </td>
            <td> {player.scoreRound3} </td>
            <td> {player.winRounds[0]} </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
        </tbody>
      </table>
      
      
      
    </div>

  );

};

export default Results;