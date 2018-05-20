import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { getLogger } from 'logger';
import { getPokemonList, getPokemonDetailByName } from 'domain/network/pokemon';
import { updatePokemonListAction, updatePokemonDetailAction, updatePokemonListFetchingAction, updatePokemonDetailFetchingAction } from 'domain/actions';

const logger = getLogger('domain/middleware/network/pokemon');

export function* updatePokemonList() {
    logger.debug('List from network');
    yield put(updatePokemonListFetchingAction(true));
    try {
        const list = yield call(getPokemonList);
        yield put(updatePokemonListAction(list));
        yield put(updatePokemonListFetchingAction(false));
    } catch (error) {
        logger.error('Fetch updatePokemonList failure.', error);
        yield put(updatePokemonListFetchingAction(false));
    }
}

export function* updatePokemonDetail(action) {
    logger.debug('Detail from network');
    yield put(updatePokemonDetailFetchingAction(true));
    try {
        const pokemon = yield call(getPokemonDetailByName, action.name);
        yield put(updatePokemonDetailAction(pokemon));
        yield put(updatePokemonDetailFetchingAction(false));
    } catch (error) {
        logger.error('Fetch updatePokemonDetail failure.', error);
        yield put(updatePokemonDetailFetchingAction(false));
    }
}
