// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from 'components/container/App';
import Dashboard from 'components/container/Dashboard';
import Login from 'components/container/Login';
import PokemonList from 'components/container/PokemonList';
import PokemonDetail from 'components/container/PokemonDetail';

import { dispatchUpdatePokemonList, dispatchUpdatePokemonDetail } from 'domain/middleware/dispatcher/pokemon';

let history;

function getHistory (store) {
    if (!history) {
        history = syncHistoryWithStore(browserHistory, store);
    }
    return history;
}

export default function RootRouter(store: any) {
    return (
    <Provider store={store}>
      { /* Tell the Router to use our enhanced history */ }
      <Router history={getHistory(store)}>
        <Route path="/" component={App}>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="login" component={Login}/>
          <Route path="pokemonlist" component={PokemonList} onEnter={dispatchUpdatePokemonList} />
          <Route path="pokemondetail/:name" component={PokemonDetail} onEnter={(nextState) => dispatchUpdatePokemonDetail(nextState.params.name)} />
        </Route>
      </Router>
    </Provider>
    );
}
