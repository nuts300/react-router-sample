import * as React from 'react';
import { connect } from 'react-redux';

function Login(props) {
    return <h2>Login!!!</h2>
}

function mapState(state) {
    return {
      app: state.app,
    };
}
function mapDispatch(dispatch) {
    return {
        actions: {} // user action
    };
};

export default connect(mapState, mapDispatch)(Login);

