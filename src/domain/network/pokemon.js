import { getLogger } from 'logger';

const logger = getLogger('domain/network/pokemon');

const URL = 'https://pokeapi.co/api/v2/type/1/';
const URL_DETAIL = 'https://pokeapi.co/api/v2/pokemon/';

export async function getPokemonList() {
    logger.debug('Requesting list from network', '- list -');
    const resp = await fetch(URL);
    if (resp.ok) {
      const data = await resp.json();
      return data.pokemon.map(e => ({
        name: e.pokemon.name,
        url: e.pokemon.url
      }));
    } else throw new TypeError('getList response is not Ok');
  }
  
export async function getPokemonDetailByName(name) {
    logger.debug('Requesting from network', '- element -', name);
    updateLoading(true);
    const resp = await fetch(`${URL_DETAIL}${name}`);
    if (resp.ok) {
        return resp.json();
    } else throw new TypeError('getDetailByName response is not Ok');
}
