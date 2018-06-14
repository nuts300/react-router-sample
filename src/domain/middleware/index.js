import { UPDATE_POKEMON_LIST_PROCESS, UPDATE_POKEMON_DETAIL_PROCESS } from 'domain/actions';
import { updatePokemonList, updatePokemonDetail } from 'domain/middleware/effects/pokemon';
import { all, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        takeLatest(UPDATE_POKEMON_LIST_PROCESS, updatePokemonList),
        takeLatest(UPDATE_POKEMON_DETAIL_PROCESS, updatePokemonDetail)
    ]);
}

