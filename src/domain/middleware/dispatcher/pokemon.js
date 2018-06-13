// @flow
import { updatePokemonListProcess, updatepokemonDetailProcess } from 'domain/actions';
import { dispatch } from 'domain/store';

export function dispatchUpdatePokemonList(): void {
  dispatch(updatePokemonListProcess());
}

export function dispatchUpdatePokemonDetail(name: string): void {
  dispatch(updatepokemonDetailProcess(name));
}
