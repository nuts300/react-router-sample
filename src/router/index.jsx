import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'components/container/App';
import Dashboard from 'components/container/Dashboard';
import Login from 'components/container/Login';

let history;

function getHistory (store) {
    if (!history) {
        history = syncHistoryWithStore(browserHistory, store);
    }
    return history;
}

export default function RootRouter(store) {
    const history = syncHistoryWithStore(browserHistory, store);
    return (
    <Provider store={store}>
      { /* Tell the Router to use our enhanced history */ }
      <Router history={getHistory(store)}>
        <Route path="/" component={App}>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
    </Provider>
    );
}
