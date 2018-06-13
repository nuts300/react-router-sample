// @flow
import { Record } from 'immutable';
import { PokemonList } from 'domain/store/state/pokemon_list';
import { PokemonDetail } from 'domain/store/state/pokemon_detail';

export type HomePage = { name: 'HOME_PAGE' };
export type DetailPage = { name: 'DETAIL_PAGE' };
export type PageProps = HomePage | DetailPage;
export const Page = Record<PageProps>({ name: 'HOME_PAGE' });

export type StateProps = {
  currentPage: Page,
  pokemonList: PokemonList,
  pokemonDetail: PokemonDetail
};

export const State = Record<StateProps>({
  currentPage: Page(),
  pokemonList: PokemonList(),
  pokemonDetail: PokemonDetail(),
})
