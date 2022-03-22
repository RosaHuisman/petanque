import { connect } from 'react-redux';
import Game from '../../components/Game';
import { makeFirstTour, validScore } from '../../store/actions/game';

 
const mapStateToProps = (state) => ({
  game: state.game,
  round1: state.game.round1,
  score: state.game.score,
});

const mapDispatchToProps = (dispatch) => ({
  
  makeFirstTour: () => {
    dispatch(makeFirstTour());
  },

  validScore: (id1, id2) => {
    dispatch(validScore(id1, id2))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
