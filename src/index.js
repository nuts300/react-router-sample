import { initStore } from 'domain/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from 'domain/store/reducer';
import RootRouter from 'router'
import rootSaga from 'domain/middleware';
import { initialAppState } from 'domain/store/state';

const reducers = {
    app: reducer,
    routing: routerReducer,
}

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    app: initialAppState
};

const store = initStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

sagaMiddleware.run(rootSaga);

export function render() {
    ReactDOM.render(RootRouter(store), document.getElementById('app'));
}

render();
