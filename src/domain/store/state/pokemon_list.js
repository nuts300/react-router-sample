// @flow

import { Record, List } from 'immutable';

export type ItemProps = { name: string; url: string };
export const Item = Record({ name: '', url: '' });

export type PokemonListProps = {
  fetching: boolean,
  list: List<Item>
}
export const PokemonList = Record({
  fetching: false,
  list: List()
});
