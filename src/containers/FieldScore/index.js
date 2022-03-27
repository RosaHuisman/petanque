import { connect } from 'react-redux';
import FieldScore from '../../components/FieldScore';
import { changeValue } from '../../store/actions/game';


const mapStateToProps = (state, ownProps) => ({
  value: state.game.scores[ownProps.name],
  game: state.game
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value, roundId) => {
    console.log(ownProps.name, value, roundId)
    dispatch(changeValue(ownProps.name, value, roundId));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FieldScore);
