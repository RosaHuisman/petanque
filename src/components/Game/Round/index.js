import React from "react";
import FieldScore from '../../../containers/FieldScore';


import './style.scss';

const Game = ({
  makeRound,
  round,
  changeField,
  score,
  validScore,
  roundid,
  game,
}) => {

  const handleMakeRound = () => {
    makeRound(roundid);
  }

  const handleValidScore = (id1, id2) => {
    validScore(id1, id2);
  }

  return (
    <div className="game">


{roundid == 1 && round.length == 0 ? (
  <button
      type="button"
      className=""
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}


{roundid == 2 && round.length == 0 ? (
  <button
      type="button"
      className=""
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}


{roundid == 3 && round.length == 0 ? (
  <button
      type="button"
      className=""
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}

{roundid}
    
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
      
      { round.length != 0 ? (

      round.map((corridor) => (
        <tr key={corridor.id}> 
          <td> {corridor.id}</td> 
        
          <td> 
            <ul>
              {corridor.team1.players.map((player) => {
                return <span key={player.id} className="game_table_player">{player.name}</span>
              })} 
            </ul> 
            <FieldScore
              name={"score-team-"+corridor.team1.id}
              placeholder="score"
              type="number"
              min="0" 
              max="13"
              onChange={changeField}
              value={score}
              roundid={roundid}
              corridorid={corridor.id}
              teamid={corridor.team1.id}
              player1={corridor.team1.players[0]}
              player2={corridor.team1.players[1]}

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
              name={"score-team-"+corridor.team2.id}
              placeholder="score"
              type="number"
              min="0" 
              max="13"
              onChange={changeField}
              value={score}
              roundid={roundid}
              corridorid={corridor.id}
              teamid={corridor.team2.id}
              player1={corridor.team2.players[0]}
              player2={corridor.team2.players[1]}
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
      )

      ) : null }
        
        
      </tbody>    
    </table> 

    </div>

  );

};

export default Game;