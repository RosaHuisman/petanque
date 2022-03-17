import React from "react";


import './style.scss';

const Game = ({
  game,
  makeFirstTour,
  round1,
}) => {
  const handleMakeFirstTour = () => {
    makeFirstTour();
  }

  return (
    <div className="game">

    <button
      type="button"
      className=""
      onClick={handleMakeFirstTour}
    >
      Créer premier tour
    </button>

    <table className="table">
      <thead> 
        <td> Terrain</td> 
        <td> Joueurs</td> 
        <td> contre </td> 
        <td> joueurs </td>
        <td>  </td>
      </thead>
      
      <tbody>
        {round1.map((corridor) => (
          <tr> 
            <td> {corridor.id}</td> 
            <td> {corridor.team1.map((player) => (player.name))} <input type="number" min="0" max="13"></input></td> 
            <td></td>
            <td> {corridor.team2.map((player) => (player.name))} <input type="number" min="0" max="13"></input> </td>
            <td> <button> Valider score</button></td> 
          </tr>
          )
        )}
      </tbody>           
    </table>
    

    </div>

  );

};

export default Game;