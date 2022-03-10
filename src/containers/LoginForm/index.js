import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { changeValue, login, logout } from '../../store/actions';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  isLogged: state.logged,
  loggedMessage: `Bonjour ${state.pseudo}`,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
