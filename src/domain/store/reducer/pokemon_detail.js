import Immutable from 'immutable';

import { initialPokemonDetailState } from 'domain/store/state/pokemon_detail';
import { ACTIONS } from 'domain/actions';

function updatePokemonDetail(state, pokemon) {
    return state.set('pokemon', pokemon);
}

function updatePokemonDetailFetching(state, isFetching) {
    return state.set('fetching', isFetching);
}

export default function pokemonDetailReducer(state = initialPokemonDetailState, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_POKEMON_DETAIL:
            return updatePokemonDetail(state, action.pokemon);
        case ACTIONS.UPDATE_POKEMON_DETAIL_FETCHING:
            return updatePokemonDetailFetching(state, action.isFetching);
        default:
            return state;
    }
}
