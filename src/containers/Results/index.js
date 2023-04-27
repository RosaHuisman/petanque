import { connect } from 'react-redux';
import Results from '../../components/Results';
import { saveGameInDB, hideSaveMessage, cleanState } from '../../store/actions/game';
import { isActive, dateIsActive } from '../../store/actions/home';


const mapStateToProps = (state, ownProps) => ({
 players: state.game.players,
 winAllRounds: state.game.winAllRounds,
 winTwoRounds: state.game.winTwoRounds,
 winOneRound: state.game.winOneRound,
 winNoRound: state.game.winNoRound,
 showSaveMessage: state.game.showSaveMessage,
 savedMessage: state.game.savedMessage,
 date: state.game.date,
 dateIsActive: state.home.dateIsActive,

});

const mapDispatchToProps = (dispatch, ownProps) => ({

saveGame: () => {
    dispatch(saveGameInDB());
},

hideSaveMessage: () => {
    dispatch(hideSaveMessage());
},

cleanState: () => {
    dispatch(cleanState());
  },

isActive: (name) => {
dispatch(isActive(name));
},

dateIsActive: () => {
dispatch(dateIsActive());
}

});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
