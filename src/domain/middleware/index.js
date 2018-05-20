import { ACTIONS } from 'domain/actions';
import { updatePokemonList, updatePokemonDetail } from 'domain/middleware/effects/pokemon';
import { all, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        takeLatest(ACTIONS.UPDATE_POKEMON_LIST_PROCESS, updatePokemonList),
        takeLatest(ACTIONS.UPDATE_POKEMON_DETAIL_PROCESS, updatePokemonDetail)
    ]);
}

