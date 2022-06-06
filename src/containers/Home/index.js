import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getGames } from '../../store/actions/history';
import { cleanState } from '../../store/actions/game';


const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  homeIsActive: state.home.homeIsActive,
  gameIsActive: state.home.gameIsActive,
  historyIsActive: state.home.historyIsActive,
  resultIsActive: state.home.resultIsActive,
  playersIsActive: state.home.playersIsActive,
  newGameIsActive: state.home.newGameIsActive,
  players: state.game.players,

});

const mapDispatchToProps = (dispatch) => ({

cleanState: () => {
  dispatch(cleanState());
}, 

getGames: () => {
    dispatch(getGames());
},

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
