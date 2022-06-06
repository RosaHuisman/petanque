import { connect } from 'react-redux';
import Field from '../../components/Field';
import { changeValue } from '../../store/actions/game';
import { changeValueLogin } from '../../store/actions/authentification';


const mapStateToProps = (state, ownProps) => ({
  value: state.game[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    dispatch(changeValue(ownProps.name, value));
    dispatch(changeValueLogin(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
