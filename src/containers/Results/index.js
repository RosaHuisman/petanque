import { connect } from 'react-redux';
import Results from '../../components/Results';


const mapStateToProps = (state, ownProps) => ({
 players: state.game.players,
 winAllRounds: state.game.winAllRounds,
 winTwoRounds: state.game.winTwoRounds,
 winOneRound: state.game.winOneRound,
 winNoRound: state.game.winNoRound,

});

const mapDispatchToProps = (dispatch, ownProps) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
