import { connect } from 'react-redux';
import History from '../../components/History';
import { retrieveGame } from '../../store/actions/history';

const mapStateToProps = (state, ownProps) => ({
    allGames: state.history.allGames,
    foundedGame: state.history.foundedGame, 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    retrieveGame : (gameId) => {
        dispatch(retrieveGame(gameId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
