import { connect } from 'react-redux';
import NewGame from '../../components/NewGame';
import { addPlayer, deletePlayer } from '../../store/actions';


const mapStateToProps = (state) => ({
  player: state.player,
  players: state.players,

});

const mapDispatchToProps = (dispatch) => ({
    handleAddPlayer: () => {
      dispatch(addPlayer());
    },
    
    deletePlayer: (playerId) => {
      dispatch(deletePlayer(playerId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
