import { connect } from 'react-redux';
import Home from '../../components/Home';
import { getGames } from '../../store/actions/history';
import { cleanState } from '../../store/actions/game';


const mapStateToProps = (state) => ({
  logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({

cleanState: () => {
  dispatch(cleanState());
}, 

getGames: () => {
    dispatch(getGames());
},

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
