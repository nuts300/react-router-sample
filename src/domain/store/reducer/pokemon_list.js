// @flow
import type { Action } from 'domain/actions';
import type { ItemProps } from 'domain/store/state/pokemon_list';

import { List } from 'immutable';
import { PokemonList, Item } from 'domain/store/state/pokemon_list';
import { UPDATE_POKEMON_LIST, UPDATE_POKEMON_LIST_FETCHING } from 'domain/actions';

function updatePokemonList(state: PokemonList, list: Array<ItemProps>): PokemonList {
  const recordList: Array<Item> = list.map(item => Item(item));
  return state.set('list', List(recordList));
}

function updatePokemonListFetching(state: PokemonList, isFetching: boolean): PokemonList {
  return state.set('fetching', isFetching);
}

export default function pokemonListReducer(state: PokemonList = new PokemonList(), action: Action): PokemonList {
  switch (action.type) {
    case UPDATE_POKEMON_LIST:
      return updatePokemonList(state, action.list);
    case UPDATE_POKEMON_LIST_FETCHING:
      return updatePokemonListFetching(state, action.isFetching);
    default:
      return state;
  }
}