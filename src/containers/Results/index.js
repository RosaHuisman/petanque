import { connect } from 'react-redux';
import Results from '../../components/Results';
import { saveGameInDB } from '../../store/actions/game';

const mapStateToProps = (state, ownProps) => ({
 players: state.game.players,
 winAllRounds: state.game.winAllRounds,
 winTwoRounds: state.game.winTwoRounds,
 winOneRound: state.game.winOneRound,
 winNoRound: state.game.winNoRound,

});

const mapDispatchToProps = (dispatch, ownProps) => ({

saveGame: () => {
    dispatch(saveGameInDB());
},

});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
