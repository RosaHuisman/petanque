import { connect } from 'react-redux';
import Results from '../../components/Results';
import { saveGameInDB, hideSaveMessage } from '../../store/actions/game';

const mapStateToProps = (state, ownProps) => ({
 players: state.game.players,
 winAllRounds: state.game.winAllRounds,
 winTwoRounds: state.game.winTwoRounds,
 winOneRound: state.game.winOneRound,
 winNoRound: state.game.winNoRound,
 showSaveMessage: state.game.showSaveMessage,
 savedMessage: state.game.savedMessage,

});

const mapDispatchToProps = (dispatch, ownProps) => ({

saveGame: () => {
    dispatch(saveGameInDB());
},

hideSaveMessage: () => {
    dispatch(hideSaveMessage());
},


});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
