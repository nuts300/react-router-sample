// @flow
import type { ItemProps } from 'domain/store/state/pokemon_list';
import type { DetailItemProps } from 'domain/store/state/pokemon_detail';

export const UPDATE_POKEMON_LIST = 'UPDATE_POKEMON_LIST';
export const UPDATE_POKEMON_DETAIL = 'UPDATE_POKEMON_DETAIL';
export const UPDATE_POKEMON_LIST_FETCHING = 'UPDATE_POKEMON_LIST_FETCHING';
export const UPDATE_POKEMON_DETAIL_FETCHING = 'UPDATE_POKEMON_DETAIL_FETCHING';
export const UPDATE_POKEMON_LIST_PROCESS = 'UPDATE_POKEMON_LIST_PROCESS';
export const UPDATE_POKEMON_DETAIL_PROCESS = 'UPDATE_POKEMON_DETAIL_PROCESS';

type UpdatePokemonListAction = {
  type: typeof UPDATE_POKEMON_LIST,
  list: Array<ItemProps>
};

type UpdatePokemonDetailAction = {
  type: typeof UPDATE_POKEMON_DETAIL,
  pokemon: DetailItemProps
};

type UpdatePokemonListFetchingAction = {
  type: typeof UPDATE_POKEMON_LIST_FETCHING,
  isFetching: boolean
};

type UpdatePokemonDetailFetchingAction = {
  type: typeof UPDATE_POKEMON_DETAIL_FETCHING,
  isFetching: boolean
};

export function updatePokemonListAction(list: Array<ItemProps>): UpdatePokemonListAction {
  return {
    type: UPDATE_POKEMON_LIST,
    list: list
  };
}

export function updatePokemonDetailAction(pokemon: DetailItemProps): UpdatePokemonDetailAction {
  return {
    type: UPDATE_POKEMON_DETAIL,
    pokemon: pokemon
  };
}

export function updatePokemonListFetchingAction(isFetching: boolean): UpdatePokemonListFetchingAction {
  return {
    type: UPDATE_POKEMON_LIST_FETCHING,
    isFetching
  };
}

export function updatePokemonDetailFetchingAction(isFetching: boolean): UpdatePokemonDetailFetchingAction {
  return {
    type: UPDATE_POKEMON_DETAIL_FETCHING,
    isFetching
  };
}
