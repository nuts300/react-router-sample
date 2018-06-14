// @flow
import type { StateProps } from 'domain/store/state';

import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import toJS from 'components/utils/to_js';

function App({ children }:
  StateProps & { children?: React.ChildrenArray<any>, actions?: Array<(any) => any> }): React.Node {
    return(
  <div>
    <h1>app!!!</h1>
    <ul>
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="/login">login</Link></li>
      <li><Link to="/pokemonlist">pokemonlist</Link></li>
      <li><Link to="/pokemondetail">pokemondetail</Link></li>
    </ul>
    <div>{ children }</div>
  </div>
  );
}

function mapState(state) {
  return {
    ...state.app
  };
}

function mapDispatch(/* dispatch: Dispatch */): Dispatch {
  return {
    // user interface
    actions: {}
  };
}

export default connect(mapState, mapDispatch)(toJS(App));

