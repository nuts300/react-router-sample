// @flow
import type { State } from 'domain/store/state';
import type { Action } from 'domain/actions';

import { createStore, combineReducers } from 'redux';


let store;

export function initStore(reducers: any, initialState: { app: State }, middleware: any) {
    store = createStore(
        combineReducers(reducers),
        initialState,
        middleware
    );
    return store;
}

export function dispatch(action: Action) {
    store.dispatch(action);
}
