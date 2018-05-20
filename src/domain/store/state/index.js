import { initialPokemonListState } from 'domain/store/state/pokemon_list';
import { initialPokemonDetailState, Map } from 'domain/store/state/pokemon_detail';
import { fromJS } from 'immutable';


export const initialAppState = {
    pokemonList: fromJS(initialPokemonListState),
    pokemonDetail: fromJS(initialPokemonDetailState)
};
