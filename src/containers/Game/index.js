import { connect } from 'react-redux';
import Game from '../../components/Game';
import { makeRound, validScore, showFirstRound, showSecondRound, showThirdRound, editScore } from '../../store/actions/game';

 
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
  corridorIds: state.game.corridorIds,
});

const mapDispatchToProps = (dispatch) => ({
  
  makeRound: (id) => {
    dispatch(makeRound(id));
  },

  validScore: (corridorId, idTeam1, idTeam2) => {
    dispatch(validScore(corridorId, idTeam1, idTeam2))
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

  editScore: (corridorId) => {
    dispatch(editScore(corridorId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
