import React from "react";
import FieldScore from '../../../containers/FieldScore';


import './style.scss';

const Round = ({
  makeRound,
  round,
  changeFieldScore,
  validScore,
  roundid,
  corridorIds,
  editScore,
}) => {

  const handleMakeRound = () => {
    makeRound(roundid);
  }

  const handleValidScore = (corridorId, idTeam1, idTeam2, roundid, corridor) => {
    validScore(corridorId, idTeam1, idTeam2, roundid, corridor);
  }

  const handleEditScore = (corridorId, roundid) => {
    editScore(corridorId, roundid);
  }

  return (
    <div className="round">

{Number(roundid) === 1 && Number(round.length) === 0 ? (
  <button
      type="button"
      className="round-button"
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}


{Number(roundid) === 2 && Number(round.length) === 0 ? (
  <button
      type="button"
      className="round-button"
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}


{Number(roundid) === 3 && Number(round.length) === 0 ? (
  <button
      type="button"
      className="round-button"
      onClick={handleMakeRound}
    >
      Créer tour
    </button>
) : null}
    
    <table className="table">
      <thead> 
        <tr>
          <td> Terrain</td> 
          <td> Joueurs</td> 
          <td> </td> 
          <td> Joueurs </td>
          <td>  </td>
        </tr>
      </thead>
      
      { Number(round.length) !== 0 ? (

      round.map((corridor) => (
        <tbody>
        <tr key={corridor.id}> 
          <td> {corridor.id}</td> 
        
          <td> 
            <div>
              {corridor.team1.players.map((player) => {
                return <span key={player.id} className="game_table_player ">{player.name}</span>
              })} 
            </div>
          </td>
          <td><i class="bi bi-arrow-left-right"></i></td>
          <td>
            <div>
              {corridor.team2.players.map((player) => {
                return <span key={player.id} className="game_table_player">{player.name}</span>
            })} 
            </div> 
          </td>
        </tr>


        {(corridorIds.includes(corridor.id)) ? (
          <tr>
          <td> </td>
          { Number(roundid) === 1 ? (
            <>
              <td>{corridor.team1.players[0].scoreRound1} </td> 
              <td></td>   
              <td> {corridor.team2.players[0].scoreRound1} </td>
            </>
          ) : Number(roundid) === 2 ? (
            <>
              <td>{corridor.team1.players[0].scoreRound2}</td>
              <td></td>
              <td> {corridor.team2.players[0].scoreRound2} </td>
            </>
          ) : Number(roundid) === 3 ? (
            <>
              <td>{corridor.team1.players[0].scoreRound3} </td>
              <td></td>
              <td> {corridor.team2.players[0].scoreRound3} </td>
            </>
          ) : null}
          
          <td> <button
              type="button"
              className="round-table-score-button"
              onClick={() => handleEditScore(corridor.id, roundid)}
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
              className="round-table-score-input"
              type="number"
              min="0" 
              max="13"
              onChange={changeFieldScore}
              roundid={roundid}
              corridorid={corridor.id}
              teamid={corridor.team1.id}
              player1={corridor.team1.players[0]}
              player2={corridor.team1.players[1]}
              player3={corridor.team1.players[2]}

            />
          </td> 
          <td></td>
          <td> 
             
            <FieldScore
              name={roundid+"-score-team-"+corridor.team2.id}
              placeholder="score"
              className="round-table-score-input"
              type="number"
              min="0" 
              max="13"
              onChange={changeFieldScore}
              roundid={roundid}
              corridorid={corridor.id}
              teamid={corridor.team2.id}
              player1={corridor.team2.players[0]}
              player2={corridor.team2.players[1]}
              player3={corridor.team2.players[2]}
            /> 
          </td>

          <td>  
            <button
              type="submit"
              className="round-table-score-button"
              onClick={() => {handleValidScore(corridor.id, corridor.team1.id, corridor.team2.id, roundid, corridor)}}
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