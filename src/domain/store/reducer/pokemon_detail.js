// @flow
import type { Action } from 'domain/actions';
import type { DetailItemProps } from 'domain/store/state/pokemon_detail';

import { PokemonDetail, Pokemon } from 'domain/store/state/pokemon_detail';
import { UPDATE_POKEMON_DETAIL, UPDATE_POKEMON_DETAIL_FETCHING } from 'domain/actions';

function updatePokemonDetail(state: PokemonDetail, pokemon: DetailItemProps): PokemonDetail {
    return state.set('pokemon', Pokemon(pokemon));
}

function updatePokemonDetailFetching(state: PokemonDetail, isFetching: boolean): PokemonDetail {
    return state.set('fetching', isFetching);
}

export default function pokemonDetailReducer(state: PokemonDetail = new PokemonDetail(), action: Action) {
    switch (action.type) {
        case UPDATE_POKEMON_DETAIL:
            return updatePokemonDetail(state, action.pokemon);
        case UPDATE_POKEMON_DETAIL_FETCHING:
            return updatePokemonDetailFetching(state, action.isFetching);
        default:
            return state;
    }
}
