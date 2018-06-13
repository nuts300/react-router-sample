// @flow

import type { Action } from 'domain/actions';

import { createStore, combineReducers } from 'redux';
import { State } from 'domain/store/state';


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
