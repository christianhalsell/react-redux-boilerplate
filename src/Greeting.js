import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './actions/alert'; // from Actions
import PropTypes from 'prop-types';

const Greeting = ({ setAlert, alerts }) => {
  // our Ref hook (similar to document.querySelector())
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // invoke the setAlert function from Actions
    setAlert(inputEl.current.value);

    // clear the input field
    inputEl.current.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={inputEl} type='text' />
        <button>Submit</button>
      </form>
      <h1>Hello, {alerts.msg}!</h1>
    </div>
  );
};

Greeting.propTypes = {
  setAlert: PropTypes.func.isRequired,
  alerts: PropTypes.object.isRequired
};

// coming in from the global state
const mapStateToProps = (state) => ({
  alerts: state.alert // "alerts" is a name we created for props, "state.alert" is from the combined reducer
});

// connect(mapStateToProps, mapPropsToState)(NameOfComponent)
export default connect(mapStateToProps, { setAlert })(Greeting);
