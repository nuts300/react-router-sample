import { initStore } from 'domain/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { routerReducer } from 'react-router-redux';

import reducer from 'domain/store/reducer';
import RootRouter from 'router'

const reducers = {
    app: reducer,
    routing: routerReducer,
}

const store = initStore(reducers);

export function render() {
    ReactDOM.render(RootRouter(store), document.getElementById('app'));
}

render();
