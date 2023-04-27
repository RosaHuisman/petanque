import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import { logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';
import { endGame, cleanState } from '../../store/actions/game'
import { isActive, dateIsActive } from '../../store/actions/home';


const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
  homeIsActive: state.home.homeIsActive,
  gameIsActive: state.home.gameIsActive,
  historyIsActive: state.home.historyIsActive,
  resultIsActive: state.home.resultIsActive,
  playersIsActive: state.home.playersIsActive,
  dateIsActive: state.home.dateIsActive,
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

  isActive: (name) => {
    dispatch(isActive(name));
  },

  cleanState: () => {
    dispatch(cleanState());
  },

  dateIsActive: () => {
    dispatch(dateIsActive());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

