// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import toJS from 'components/utils/to_js'

function Dashboard() {
    return <h2>Dashboard!!!</h2>
}

function mapState(state) {
    return {
      ...state.app,
    };
}
function mapDispatch(/* dispatch: Dispatch */) {
    return {
        actions: {} // user action
    };
}

export default connect(mapState, mapDispatch)(toJS(Dashboard));
