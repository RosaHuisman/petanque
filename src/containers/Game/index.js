import { connect } from 'react-redux';
import Game from '../../components/Game';
import { makeRound, validScore, showFirstRound, showSecondRound, showThirdRound, editScore, endGame, saveGameInDB, showMakeRoundMessage } from '../../store/actions/game';

 
const mapStateToProps = (state) => ({
  game: state.game,
  round1: state.game.round1,
  round2: state.game.round2,
  round3: state.game.round3,
  score: state.game.score,
  round1Open: state.game.round1Open,
  round2Open: state.game.round2Open,
  round3Open: state.game.round3Open,
  scoreIsEntered: state.game.scoreIsEntered,
  corridorIds1: state.game.corridorIds1,
  corridorIds2: state.game.corridorIds2,
  corridorIds3: state.game.corridorIds3,
  winAllRounds: state.game.winAllRounds,
  winTwoRounds: state.game.winTwoRounds,
  winOneRound: state.game.winOneRound,
  winNoRound: state.game.winNoRound,
  roundMessageVisible: state.game.showMakeRoundMessage,
  scoreMax: state.game.scoreMax,
});

const mapDispatchToProps = (dispatch) => ({
  
  makeRound: (id) => {
    dispatch(makeRound(id));
  },

  validScore: (corridorId, idTeam1, idTeam2, roundid, corridor) => {
    dispatch(validScore(corridorId, idTeam1, idTeam2, roundid, corridor));
  },

  showFirstRound: () => {
    dispatch(showFirstRound());
  },

  showSecondRound: () => {
    dispatch(showSecondRound());
  },
  
  showThirdRound: () => {
    dispatch(showThirdRound());
  },

  editScore: (corridorId, roundid) => {
    dispatch(editScore(corridorId, roundid));
  },
  
  endGame: () => {
    dispatch(endGame());
    dispatch(saveGameInDB());
  },

  showMakeRoundMessage: () => {
    dispatch(showMakeRoundMessage());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
