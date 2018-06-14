// @flow
import type { ItemProps } from 'domain/store/state/pokemon_list';
import type { DetailItemProps } from 'domain/store/state/pokemon_detail';

import { Record } from 'immutable';
import { PokemonList } from 'domain/store/state/pokemon_list';
import { PokemonDetail } from 'domain/store/state/pokemon_detail';

export type HomePage = { name: 'HOME_PAGE' };
export type DetailPage = { name: 'DETAIL_PAGE' };
export type PageProps = HomePage | DetailPage;
export const Page = Record({ name: 'HOME_PAGE' });

export type State = {
  currentPage: Page,
  pokemonList: PokemonList,
  pokemonDetail: PokemonDetail
};

export type StateProps = {
  currentPage: PageProps,
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
  currentPage: Page(),
  pokemonList: PokemonList(),
  pokemonDetail: PokemonDetail(),
}
