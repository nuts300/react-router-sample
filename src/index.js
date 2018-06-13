// @flow

import { initStore } from 'domain/store';
import * as ReactDOM from 'react-dom';
import { routerReducer } from 'react-router-redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from 'domain/store/reducer';
import RootRouter from 'router'
import rootSaga from 'domain/middleware';
import { State } from 'domain/store/state';

const reducers = {
	app: reducer,
	routing: routerReducer,
}

const sagaMiddleware = createSagaMiddleware();

const initialState: { app: State } = {
	app: State()
};

const store = initStore(reducers, initialState, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export function render() {
	const appElement = document.getElementById('app');
	if (appElement) {
		ReactDOM.render(RootRouter(store), appElement);
	}
}

render();
