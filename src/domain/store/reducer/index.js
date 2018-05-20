import { combineReducers } from 'redux';

import pokemonListReducer from 'domain/store/reducer/pokemon_list';
import pokemonDetailReducer from 'domain/store/reducer/pokemon_detail';

const reducer = combineReducers({
    pokemonList: pokemonListReducer,
    pokeonDetail: pokemonDetailReducer
});

export default reducer;
