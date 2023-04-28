import { connect } from 'react-redux';
import DateAndPoints from '../../components/DateAndPoints';
import { setScoreMax, setDate  } from '../../store/actions/game';
import { playersIsActive } from '../../store/actions/home';
 
const mapStateToProps = (state) => ({
  players: state.game.players,
  date: state.game.date,

});

const mapDispatchToProps = (dispatch) => ({


    changeScoreMax: (scoreMax) => {
      dispatch(setScoreMax(scoreMax));
    },

    setDate : (date) => {
      dispatch(setDate(date));
    },

    showAddPlayerForm: () => {
      dispatch(playersIsActive());
    }

});


export default connect(mapStateToProps, mapDispatchToProps)(DateAndPoints);
