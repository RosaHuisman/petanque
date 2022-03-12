import { connect } from 'react-redux';
import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  isLogged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
