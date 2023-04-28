import { connect } from 'react-redux';
import Home from '../../components/Home';
//import { cleanState } from '../../store/actions/game';


const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  gameIsActive: state.home.gameIsActive,
  resultIsActive: state.home.resultIsActive,
  playersIsActive: state.home.playersIsActive,
  dateIsActive: state.home.dateIsActive,
});

const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
