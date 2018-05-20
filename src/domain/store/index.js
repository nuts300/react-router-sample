import { createStore, combineReducers } from 'redux';

let store;

export function initStore(reducers, middleware) {
    store = createStore(
        combineReducers(reducers),
        middleware
    );
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
