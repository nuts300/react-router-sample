// @flow

import { Record, List } from 'immutable';

export type ItemProps = { name: string; url: string };
export const Item = Record<ItemProps>({ name: '', url: '' });

export type PokemonListProps = {
  fetching: boolean,
  list: List<Item>
}
export const PokemonList = Record<PokemonListProps>({
  fetching: false,
  list: new List()
});
