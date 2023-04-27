import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { login, logout } from '../../store/actions/authentification';
import { logout as logoutAction } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
  isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
    dispatch(logoutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
