import { connect } from 'react-redux';
import NewGame from '../../components/NewGame';
import { addPlayer, deletePlayer, editForm, editPlayer, deleteForm, setGameDate } from '../../store/actions/newGame';


const mapStateToProps = (state) => ({
  date: state.newGame.date,
  player: state.newGame.player,
  playerId: state.newGame.playerId,
  players: state.newGame.players,
  showDeletePlayerForm: state.newGame.showDeletePlayerForm,
  showEditPlayerForm: state.newGame.showEditPlayerForm,

});

const mapDispatchToProps = (dispatch) => ({
  
    setGameDate: (date) => {
      dispatch(setGameDate(date));
    },

    handleAddPlayer: () => {
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

});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
