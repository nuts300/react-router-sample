import { dispatch } from 'domain/store';

export const ACTIONS = {
    UPDATE_POKEMON_LIST: 'UPDATE_POKEMON_LIST',
    UPDATE_POKEMON_DETAIL: 'UPDATE_POKEMON_DETAIL',
    UPDATE_POKEMON_LIST_FETCHING: 'UPDATE_POKEMON_LIST_FETCHING',
    UPDATE_POKEMON_DETAIL_FETCHING: 'UPDATE_POKEMON_DETAIL_FETCHING'
}

export function updatePokemonListAction(list) {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_LIST,
        list: list
    });
}

export function updatePokemonDetailAction(pokemon) {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_DETAIL,
        pokemon: pokemon
    });
}

export function updatePokemonListFetchingAction(isFetching) {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_LIST_FETCHING,
        isFetching
    })
}

export function updatePokemonDetailFetchingAction(isFetching) {
    dispatch({
        type: ACTIONS.UPDATE_POKEMON_DETAIL_FETCHING,
        isFetching
    })
}