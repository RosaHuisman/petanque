import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import { logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';
import { endGame, cleanState } from '../../store/actions/game'
import { getGames } from '../../store/actions/history';
import { isActive, newGameIsActive } from '../../store/actions/home';


const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
  loggedMessage: `Bonjour ${state.auth.firstName}`,
  homeIsActive: state.home.homeIsActive,
  gameIsActive: state.home.gameIsActive,
  historyIsActive: state.home.historyIsActive,
  resultIsActive: state.home.resultIsActive,
  playersIsActive: state.home.playersIsActive,
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogout: () => {
    dispatch(logout());
    dispatch(logoutAction());
  },

  showResults: () => {
    dispatch(endGame());
  },

  getGames: () => {
    dispatch(getGames());
  },

  isActive: (name) => {
    dispatch(isActive(name));
  },

  cleanState: () => {
    dispatch(cleanState());
  },

  newGameIsActive: () => {
    dispatch(newGameIsActive());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

