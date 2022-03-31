import { connect } from 'react-redux';
import Field from '../../components/Field';
import { changeValue } from '../../store/actions/newGame';


const mapStateToProps = (state, ownProps) => ({
  value: state.newGame[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    dispatch(changeValue(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
