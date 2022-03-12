import { connect } from 'react-redux';
import Field from '../../components/Field';
import { changeValue } from '../../store/actions';


const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    dispatch(changeValue(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
