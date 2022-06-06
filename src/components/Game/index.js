import React from "react";
import { useHistory } from 'react-router-dom';
import Round from './Round';
import MediaQuery from 'react-responsive'

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
  corridorIds1,
  corridorIds2,
  corridorIds3,
  scoreIsEntered,
  editScore,
  endGame,
  showMakeRoundMessage,
  roundMessageVisible,
  scoreMax,

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

  let history = useHistory();

  const handleEndGame = () => {
    endGame();
    history.push("/resultats");
  }

  return (
    <>
      <MediaQuery minWidth={481}>
      <div className="game">

    <div className="game-header">
      <div className="game-header-round-buttons">
        <button className= {round1Open ? "game-header-round-button-active" : "game-header-round-button"} onClick={handleShowFirstRound}> Match 1 </button>
        <button className= {round2Open ? "game-header-round-button-active" : "game-header-round-button"} onClick={handleShowSecondRound}> Match 2 </button>
        <button className= {round3Open ? "game-header-round-button-active" : "game-header-round-button"} onClick={handleShowThirdRound}> Match 3 </button>
      </div>
      
    </div>



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
      corridorIds={corridorIds1}
      scoreIsEntered={scoreIsEntered}
      editScore={editScore}
      showMakeRoundMessage={showMakeRoundMessage}
      roundMessageVisible={roundMessageVisible}
      scoreMax={scoreMax}
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
      corridorIds={corridorIds2}
      editScore={editScore}
      scoreMax={scoreMax}

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
      corridorIds={corridorIds3}
      editScore={editScore}
      scoreMax={scoreMax}

    />
    </div>
    ) : null}

    </div>

    </MediaQuery>


  <MediaQuery minWidth={0} maxWidth={480}>
    <div className="game-mobile">

      <div className="game-mobile-header">
          <button className="game-mobile-header-round-button" onClick={handleShowFirstRound}> Tour 1 </button>
          <button className="game-mobile-header-round-button" onClick={handleShowSecondRound}> Tour 2 </button>
          <button className="game-mobile-header-round-button" onClick={handleShowThirdRound}> Tour 3 </button>
      </div>

      <button
        type="button"
        className="game-mobile-header-result-button"
        onClick={handleEndGame}
        Redirect="/resultats"
      >
        C'est bon, résultats
      </button>



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
        corridorIds={corridorIds1}
        scoreIsEntered={scoreIsEntered}
        editScore={editScore}
        showMakeRoundMessage={showMakeRoundMessage}
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
        corridorIds={corridorIds2}
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
        corridorIds={corridorIds3}
        editScore={editScore}
      />
      </div>
      ) : null}

      

      </div>

      </MediaQuery>

    </>
    

  );

};

export default Game;