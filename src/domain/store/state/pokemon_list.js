// @flow

import { Record, List } from 'immutable';

export type ItemProps = { name: string; url: string };
export const Item = Record<ItemProps>({ name: '', url: '' });

export type PokemonDetailProps = {
  fetching: boolean,
  list: List<Item>
}
export const PokemonList = Record<PokemonDetailProps>({
  fetching: false,
  list: new List()
});

export const initialPokemonListState = new PokemonList();