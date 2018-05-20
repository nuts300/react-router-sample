import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import toJS from 'components/utils/to_js'

function App({ children }) {
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
function mapDispatch(dispatch) {
    return {
        actions: {} // user action
    };
};

export default connect(mapState, mapDispatch)(toJS(App));

