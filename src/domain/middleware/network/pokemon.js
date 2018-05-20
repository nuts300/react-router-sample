import { getLogger } from 'logger';
import { getPokemonList, getPokemonDetailByName } from 'domain/network/pokemon';
import { updatePokemonListAction, updatePokemonDetailAction, updatePokemonListFetchingAction, updatePokemonDetailFetchingAction } from 'domain/actions';

const logger = getLogger('domain/middleware/network/pokemon');

export async function updatePokemonList() {
    logger.debug('List from network');
    updatePokemonListFetchingAction(true);
    try {
        const list = await getPokemonList();
        updatePokemonListAction(list);
        updatePokemonListFetchingAction(false);
    } catch (error) {
        logger.error('Fetch updatePokemonList failure.', error);
        updatePokemonListFetchingAction(false);
    }
}

export async function updatePokemonDetail(name) {
    logger.debug('Detail from network');
    updatePokemonDetailFetchingAction(true);
    try {
        const pokemon = await getPokemonDetailByName(name);
        updatePokemonDetailAction(pokemon);
        updatePokemonDetailFetchingAction(false);
    } catch (error) {
        logger.error('Fetch updatePokemonDetail failure.', error);
        updatePokemonDetailFetchingAction(false);
    }
}
