import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { login, logout } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
  loggedMessage: `Bonjour ${state.auth.firstName}`,
});

const mapDispatchToProps = (dispatch) => ({
  
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
