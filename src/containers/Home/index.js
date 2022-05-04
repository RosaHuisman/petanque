import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getGames } from '../../store/actions/history';

const mapStateToProps = (state) => ({
  logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  
getGames: () => {
    dispatch(getGames());
},

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
