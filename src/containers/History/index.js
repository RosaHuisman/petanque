import { connect } from 'react-redux';
import History from '../../components/History';
import { retrieveGame, emptyFoundedGame } from '../../store/actions/history';

const mapStateToProps = (state, ownProps) => ({
    allGames: state.history.allGames,
    foundedGame: state.history.foundedGame, 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    retrieveGame : (gameId) => {
        dispatch(retrieveGame(gameId));
    },

    emptyFoundedGame : () => {
        dispatch(emptyFoundedGame());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
