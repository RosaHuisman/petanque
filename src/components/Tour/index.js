import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FieldScore from '../../containers/FieldScore';


import './style.scss';

const Game = ({
  makeFirstTour,
  round1,
  changeField,
  score,
  validScore,
  game
}) => {
  const handleMakeFirstTour = () => {
    makeFirstTour();
  }

  const handleValidScore = (id1, id2) => {
    validScore(id1, id2);
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

    <button
    onClick={handleMakeFirstTour}
    >
       Tour 2
    </button>

    <table className="table">
      <thead> 
        <tr>
          <td> Terrain</td> 
          <td> Joueurs</td> 
          <td> contre </td> 
          <td> joueurs </td>
          <td>  </td>
        </tr>
      </thead>
      
      <tbody>
      
        {round1.map((corridor) => (
          <tr key={corridor.id}> 
            <td> {corridor.id}</td> 
           
            <td> 
              <ul>
                {corridor.team1.players.map((player) => {
                  return <span key={player.id} className="game_table_player">{player.name}</span>
                })} 
              </ul> 
              <FieldScore
                id={corridor.team1.id}
                name={"score-team-"+corridor.team1.id}
                placeholder="score"
                type="number"
                min="0" 
                max="13"
                onChange={changeField}
                value={score}
              />
            </td> 
            <td></td>
            <td> 
              <ul>
                {corridor.team2.players.map((player) => {
                  return <span key={player.id} className="game_table_player">{player.name}</span>
              })} 
              </ul>  
              <FieldScore
                id={corridor.team2.id}
                name={"score-team-"+corridor.team2.id}
                placeholder="score"
                type="number"
                min="0" 
                max="13"
                onChange={changeField}
                value={score}
              /> 
            </td>
            <td>  
              <button
                type="submit"
                className="login-form-button"
                onClick={() => {handleValidScore(corridor.team1.id, corridor.team2.id)}}
              >
                OK
              </button>
            </td> 
          </tr>
          )
        )}
        
      </tbody>    
    </table> 

    </div>

  );

};

export default Game;