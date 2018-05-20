
export const ACTIONS = {
    UPDATE_POKEMON_LIST: 'UPDATE_POKEMON_LIST',
    UPDATE_POKEMON_DETAIL: 'UPDATE_POKEMON_DETAIL',
    UPDATE_POKEMON_LIST_FETCHING: 'UPDATE_POKEMON_LIST_FETCHING',
    UPDATE_POKEMON_DETAIL_FETCHING: 'UPDATE_POKEMON_DETAIL_FETCHING',
    UPDATE_POKEMON_LIST_PROCESS: 'UPDATE_POKEMON_LIST_PROCESS',
    UPDATE_POKEMON_DETAIL_PROCESS: 'UPDATE_POKEMON_DETAIL_PROCESS'
}

export function updatePokemonListAction(list) {
    return {
        type: ACTIONS.UPDATE_POKEMON_LIST,
        list: list
    };
}

export function updatePokemonDetailAction(pokemon) {
    return {
        type: ACTIONS.UPDATE_POKEMON_DETAIL,
        pokemon: pokemon
    };
}

export function updatePokemonListFetchingAction(isFetching) {
    return {
        type: ACTIONS.UPDATE_POKEMON_LIST_FETCHING,
        isFetching
    };
}

export function updatePokemonDetailFetchingAction(isFetching) {
    return {
        type: ACTIONS.UPDATE_POKEMON_DETAIL_FETCHING,
        isFetching
    };
}

