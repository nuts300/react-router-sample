import Immutable from 'immutable';

import { initialPokemonListState } from 'domain/store/state/pokemon_list';
import { ACTIONS } from 'domain/actions';

function updatePokemonList(state, list) {
    return Immutable.fromJS(state).set('list', list).toJS();
}

function updatePokemonListFetching(state, isFetching) {
    return Immutable.fromJS(state).set('fetching', isFetching).toJS();
}

export default function pokemonListReducer(state = initialPokemonListState, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_POKEMON_LIST:
            return updatePokemonList(state, action.list);
        case ACTIONS.UPDATE_POKEMON_LIST_FETCHING:
            return updatePokemonListFetching(state, action.isFetching)
        default:
            return state;
    }
}