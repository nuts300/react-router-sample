import { dispatch } from 'domain/store';
import { ACTIONS } from 'domain/actions';

export function dispatchUpdatePokemonList() {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_LIST_PROCESS
    });
}

export function dispatchUpdatePokemonDetail(name) {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_DETAIL_PROCESS,
        name
    });
}
