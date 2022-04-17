import { connect } from 'react-redux';
import Results from '../../components/Results';


const mapStateToProps = (state, ownProps) => ({
 players: state.game.players,

});

const mapDispatchToProps = (dispatch, ownProps) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
