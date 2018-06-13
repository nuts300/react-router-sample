// @flow
import { Record } from 'immutable';

export type DetailItemProps = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export const Pokemon = Record<DetailItemProps>({
  name: '',
  height: 0,
  weight: 0,
  sprites: {
    front_default: ''
  }
});

export type PokemonDetailProps = {
  fetching: boolean,
  pokemon:  Pokemon
};

export const PokemonDetail = Record<PokemonDetailProps>({
  fetching: false,
  pokemon: Pokemon()
});
