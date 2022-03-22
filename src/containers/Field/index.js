import { connect } from 'react-redux';
import Field from '../../components/Field';
import { changeValue } from '../../store/actions/newGame';


const mapStateToProps = (state, ownProps) => ({
  value: state.newGame[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  onChange: (value) => {
    //console.log('nom', ownProps.name);
    dispatch(changeValue(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
