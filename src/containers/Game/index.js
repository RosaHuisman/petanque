import { connect } from 'react-redux';
import Game from '../../components/Game';
import { makeFirstTour } from '../../store/actions/game';

 
const mapStateToProps = (state) => ({
  game: state.game,
  round1: state.game.round1,
});

const mapDispatchToProps = (dispatch) => ({
  
  makeFirstTour: () => {
    dispatch(makeFirstTour());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
