// @flow

import { fromJS } from 'immutable';

export const initialPokemonListState = fromJS({
    fetching: false,
    list: []
});
