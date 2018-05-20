import { createStore, combineReducers } from 'redux';

let store;

export function initStore(reducers) {
    store = createStore(
        combineReducers(reducers),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

export function dispatch(action) {
    store.dispatch(action);
}
