import { connect } from 'react-redux';
import App from '../../components/App';
import { checkToken } from '../../store/actions/authentification';

const mapStateToProps = (state) => ({
    isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
    checkIsLogged: () => {
        dispatch(checkToken());
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
