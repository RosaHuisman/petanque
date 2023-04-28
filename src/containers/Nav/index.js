import { connect } from 'react-redux';
import Nav from '../../components/Nav';
import { logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';
import { endGame, /* cleanState */ } from '../../store/actions/game'
import { isActive, dateIsActive } from '../../store/actions/home';


const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
  gameIsActive: state.home.gameIsActive,
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

  dateIsActive: () => {
    dispatch(dateIsActive());
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

