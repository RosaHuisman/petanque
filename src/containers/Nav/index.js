import { connect } from 'react-redux';
import LoginForm from '../../components/Nav';
import { logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';
import { endGame } from '../../store/actions/game'
import { getGames } from '../../store/actions/history';
import { isActive } from '../../store/actions/home';


const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
  loggedMessage: `Bonjour ${state.auth.firstName}`,
  homeIsActive: state.home.homeIsActive,
  gameIsActive: state.home.gameIsActive,
  historyIsActive: state.home.historyIsActive,
  resultIsActive: state.home.resultIsActive,
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

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
