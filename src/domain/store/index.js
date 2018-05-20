import { createStore, combineReducers } from 'redux';

let store;

export function initStore(reducers, initialState, middleware) {
    store = createStore(
        combineReducers(reducers),
        initialState,
        middleware
    );
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
