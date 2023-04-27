import { connect } from 'react-redux';
import Home from '../../components/Home';
import { cleanState } from '../../store/actions/game';


const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  homeIsActive: state.home.homeIsActive,
  gameIsActive: state.home.gameIsActive,
  historyIsActive: state.home.historyIsActive,
  resultIsActive: state.home.resultIsActive,
  playersIsActive: state.home.playersIsActive,
  dateIsActive: state.home.dateIsActive,
  players: state.game.players,

});

const mapDispatchToProps = (dispatch) => ({

cleanState: () => {
  dispatch(cleanState());
}, 


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
