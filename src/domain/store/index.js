import { createStore, combineReducers } from 'redux';

let store;

export function initStore(reducers) {
    store = createStore(combineReducers(reducers));
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
