import { connect } from 'react-redux';
import LoginForm from '../../components/Nav';
import { logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
  loggedMessage: `Bonjour ${state.auth.firstName}`,
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogout: () => {
    dispatch(logout());
    dispatch(logoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
