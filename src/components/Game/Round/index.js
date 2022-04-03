import React from "react";
import FieldScore from '../../../containers/FieldScore';


import './style.scss';

const Round = ({
  makeRound,
  round,
  changeField,
  validScore,
  roundid,
  game,
  scoreIsEntered,
  corridorIds,
  editScore,
}) => {

  const handleMakeRound = () => {
    makeRound(roundid);
  }

  const handleValidScore = (corridorId, idTeam1, idTeam2) => {
    validScore(corridorId, idTeam1, idTeam2);
  }

  const handleEditScore = (corridorId) => {
    editScore(corridorId);
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
      
       
      
      { round.length != 0 ? (

      round.map((corridor) => (
        <tbody>
        <tr key={corridor.id}> 
          <td> {corridor.id}</td> 
        
          <td> 
            <div>
              {corridor.team1.players.map((player) => {
                return <span key={player.id} className="game_table_player">{player.name}</span>
              })} 
            </div>
          </td>
          <td>
            <div>
              {corridor.team2.players.map((player) => {
                return <span key={player.id} className="game_table_player">{player.name}</span>
            })} 
            </div> 
          </td>
        </tr>

        {(scoreIsEntered && corridorIds.includes(corridor.id)) ? (
          <tr>
          <td> </td>
          <td>{corridor.team1.players[0].score}</td>    
          <td> {corridor.team2.players[0].score} </td>
          <td> <button
              type="button"
              className="login-form-button"
              onClick={() => handleEditScore(corridor.id)}
            >
              Modifier
            </button> </td>
        </tr>
          
        ) : (
        <tr>
          <td></td>
          <td>
            <FieldScore
              name={roundid+"-score-team-"+corridor.team1.id}
              placeholder="score"
              type="number"
              min="0" 
              max="13"
              onChange={changeField}
              roundid={roundid}
              corridorid={corridor.id}
              teamid={corridor.team1.id}
              player1={corridor.team1.players[0]}
              player2={corridor.team1.players[1]}

            />
          </td> 
          <td> 
             
            <FieldScore
              name={roundid+"-score-team-"+corridor.team2.id}
              placeholder="score"
              type="number"
              min="0" 
              max="13"
              onChange={changeField}
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
              onClick={() => {handleValidScore(corridor.id, corridor.team1.id, corridor.team2.id)}}
            >
              OK
            </button>
          </td>
        </tr>
        )}

        
          
        </tbody>

        )
        )

       
       
      ) : null }
        
        
         
    </table> 
    
    </div>

  );

};

export default Round;