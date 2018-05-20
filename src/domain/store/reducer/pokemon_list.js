import Immutable from 'immutable';

import { initialPokemonListState } from 'domain/store/state/pokemon_list';
import { ACTIONS } from 'domain/actions';

function updatePokemonList(state, list) {
    return state.set('list', list);
}

function updatePokemonListFetching(state, isFetching) {
    return state.set('fetching', isFetching);
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