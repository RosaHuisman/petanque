import { connect } from 'react-redux';
import App from '../../components/App';
import { checkToken } from '../../store/actions';

const mapStateToProps = (state) => ({
    isLogged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
    checkIsLogged: () => {
        dispatch(checkToken());
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
