import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = (state) => ({
    isLogged: state.auth.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
