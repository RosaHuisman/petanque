import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Round from './Round';


import './style.scss';

const Game = ({
  makeRound,
  round1,
  round2,
  round3,
  changeField,
  score,
  validScore,
  game,
  round1Open,
  round2Open,
  round3Open,
  showFirstRound,
  showSecondRound,
  showThirdRound,
  corridorIds,
  scoreIsEntered,
  editScore,

}) => {
  

  const handleShowFirstRound = () => {
    showFirstRound()
  }

  const handleShowSecondRound = () => {
    showSecondRound()
  }

  const handleShowThirdRound = () => {
    showThirdRound()
  }
  return (
    <div className="game">
    
    <button onClick={handleShowFirstRound}> Tour 1 </button>
    <button onClick={handleShowSecondRound}> Tour 2 </button>
    <button onClick={handleShowThirdRound}> Tour 3 </button>

    {round1Open ? (
      <div>
      <Round 
        makeRound={makeRound}
        changeField={changeField}
        score={score}
        validScore={validScore}
        game={game}
        round={round1}
        roundid='1'
        corridorIds={corridorIds}
        scoreIsEntered={scoreIsEntered}
        editScore={editScore}
      />
      </div>
    ) : null}

    {round2Open ? (
      <div>
      <Round 
        makeRound={makeRound}
        changeField={changeField}
        score={score}
        validScore={validScore}
        game={game}
        round={round2}
        roundid='2'
        corridorIds={corridorIds}
        editScore={editScore}
      />
      </div>
    ) : null}

    {round3Open ? (
      <div>
      <Round 
        makeRound={makeRound}
        changeField={changeField}
        score={score}
        validScore={validScore}
        game={game}
        round={round3}
        roundid='3'
        corridorIds={corridorIds}
        editScore={editScore}
      />
      </div>
    ) : null}
    


   

    </div>

  );

};

export default Game;