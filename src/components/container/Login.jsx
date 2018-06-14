// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import toJS from 'components/utils/to_js'

function Login() {
    return <h2>Login!!!</h2>
}

function mapState(state) {
    return {
      ...state.app,
    };
}
function mapDispatch(/* dispatch */) {
    return {
        actions: {} // user action
    };
}

export default connect(mapState, mapDispatch)(toJS(Login));

