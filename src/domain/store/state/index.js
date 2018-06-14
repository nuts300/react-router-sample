// @flow
import type { ItemProps } from 'domain/store/state/pokemon_list';
import type { DetailItemProps } from 'domain/store/state/pokemon_detail';

import { PokemonList } from 'domain/store/state/pokemon_list';
import { PokemonDetail } from 'domain/store/state/pokemon_detail';

export type State = {
  pokemonList: PokemonList,
  pokemonDetail: PokemonDetail
};

export type StateProps = {
  pokemonList: {
    fetching: boolean,
    list: Array<ItemProps>
  },
  pokemonDetail: {
    fetching: boolean,
    pokemon: DetailItemProps
  }
};

export const state = {
  pokemonList: PokemonList(),
  pokemonDetail: PokemonDetail(),
}
