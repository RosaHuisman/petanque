import { connect } from 'react-redux';
import DateAndPoints from '../../components/DateAndPoints';
import { deletePlayer, editForm, editPlayer, deleteForm, addPlayer, setScoreMax, setDate  } from '../../store/actions/game';
import { playersIsActive } from '../../store/actions/home';
 
const mapStateToProps = (state) => ({
  player: state.game.player,
  playerId: state.game.playerId,
  players: state.game.players,
  showDeletePlayerForm: state.game.showDeletePlayerForm,
  showEditPlayerForm: state.game.showEditPlayerForm,
  date: state.game.date,

});

const mapDispatchToProps = (dispatch) => ({

    addPlayer: () => {
      dispatch(addPlayer());
    },

    showDeleteForm: (playerId) => {
      dispatch(deleteForm(playerId));
    },
    
    deletePlayer: (playerId) => {
      dispatch(deletePlayer(playerId));
    },

    showEditForm: (playerId) => {
      dispatch(editForm(playerId));
    },

    editPlayer: (playerId) => {
      dispatch(editPlayer(playerId));
    },

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
