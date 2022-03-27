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
        id='1'
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
        id='2'
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
        id='3'
      />
      </div>
    ) : null}
    


   

    </div>

  );

};

export default Game;