import { connect } from 'react-redux';
import NewGame from '../../components/NewGame';
import { addPlayer, deletePlayer, editForm, editPlayer, deleteForm, setGameDate, clearNewGameState  } from '../../store/actions/newGame';
import { makeGame } from '../../store/actions/game';
 
const mapStateToProps = (state) => ({
  player: state.newGame.player,
  playerId: state.newGame.playerId,
  players: state.newGame.players,
  showDeletePlayerForm: state.newGame.showDeletePlayerForm,
  showEditPlayerForm: state.newGame.showEditPlayerForm,

});

const mapDispatchToProps = (dispatch) => ({

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

    makeGame: (players) => {
      dispatch(makeGame(players));
    },

    clearNewGameState: () => {
      dispatch(clearNewGameState());
    }

    

});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
