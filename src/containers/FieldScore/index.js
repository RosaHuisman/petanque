import { connect } from 'react-redux';
import FieldScore from '../../components/FieldScore';
import { changeValue } from '../../store/actions/game';


const mapStateToProps = (state, ownProps) => ({
 
  value: state.game[ownProps.name],
  game: state.game
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value, empty, player1, player2, roundid) => {
    dispatch(changeValue(ownProps.name, value, player1, player2, roundid));
    //dispatch(changeValue(ownProps.name, value, ownProps.roundid, ownProps.corridorid, ownProps.teamid));

  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FieldScore);
