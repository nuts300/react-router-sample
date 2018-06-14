// @flow
import type { ItemProps } from 'domain/store/state/pokemon_list';
import type { DetailItemProps  } from 'domain/store/state/pokemon_detail';
import type { UpdatePokemonDetailProcess } from 'domain/actions';

import { effects } from 'redux-saga'
import { getLogger } from 'logger';
import { getPokemonList, getPokemonDetailByName } from 'domain/network/pokemon';
import {
  updatePokemonListAction,
  updatePokemonDetailAction,
  updatePokemonListFetchingAction,
  updatePokemonDetailFetchingAction
} from 'domain/actions';

const logger = getLogger('domain/middleware/network/pokemon');

export function* updatePokemonList(): Generator<any, void, any> {
  logger.debug('List from network');
  yield effects.put(updatePokemonListFetchingAction(true));
  try {
    const list: Array <ItemProps> = yield effects.call(getPokemonList);
    yield effects.put(updatePokemonListAction(list));
    yield effects.put(updatePokemonListFetchingAction(false));
  } catch (error) {
    logger.error('Fetch updatePokemonList failure.', error);
    yield effects.put(updatePokemonListFetchingAction(false));
  }
}

export function* updatePokemonDetail(action: UpdatePokemonDetailProcess): Generator<any, void, any> {
  logger.debug('Detail from network');
  yield effects.put(updatePokemonDetailFetchingAction(true));
  try {
    const pokemon: DetailItemProps = yield effects.call(getPokemonDetailByName, action.name);
    yield effects.put(updatePokemonDetailAction(pokemon));
    yield effects.put(updatePokemonDetailFetchingAction(false));
  } catch (error) {
    logger.error('Fetch updatePokemonDetail failure.', error);
    yield effects.put(updatePokemonDetailFetchingAction(false));
  }
}
