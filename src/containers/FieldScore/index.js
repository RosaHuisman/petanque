import { connect } from 'react-redux';
import FieldScore from '../../components/FieldScore';
import { changeValueScore } from '../../store/actions/game';


const mapStateToProps = (state, ownProps) => ({
 
  value: state.game[ownProps.name],
  //value:10,

  game: state.game
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value, empty, player1, player2, roundid) => {
    dispatch(changeValueScore(ownProps.name, value, player1, player2, roundid));

  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FieldScore);
