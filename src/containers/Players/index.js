import { connect } from 'react-redux';
import Players from '../../components/Players';
import { deletePlayer, editForm, editPlayer, deleteForm, setPlayersInGame, addPlayer  } from '../../store/actions/game';
 
const mapStateToProps = (state) => ({
  player: state.game.player,
  playerId: state.game.playerId,
  players: state.game.players,
  showDeletePlayerForm: state.game.showDeletePlayerForm,
  showEditPlayerForm: state.game.showEditPlayerForm,
  round1: state.game.round1,
  round2: state.game.round2,
  round3: state.game.round3,

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

    setPlayersInGame: (players) => {
      dispatch(setPlayersInGame(players));
    },

    

});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
