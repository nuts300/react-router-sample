// @flow

import { initialPokemonListState } from 'domain/store/state/pokemon_list';
import { initialPokemonDetailState } from 'domain/store/state/pokemon_detail';
import { fromJS } from 'immutable';

export type HomePage = { name: 'HOME_PAGE' };

export type DetailPage = { name: 'DETAIL_PAGE' };

export type Page = HomePage | DetailPage;

export type State = {
  currentPage: Page;
  allItems: Array<Item>;
  filteredItems: Array<Item>;
  detail: DetailItem;
  shadowColor: string;
  loading: boolean;
};

export const initialAppState = {
    pokemonList: fromJS(initialPokemonListState),
    pokemonDetail: fromJS(initialPokemonDetailState)
};
