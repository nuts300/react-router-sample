import { fromJS } from 'immutable';

export const initialPokemonDetailState = fromJS({
    fetching: false,
    pokemon: {}
});
