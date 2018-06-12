// @flow;
import { Record } from 'immutable';
  
export type DetailItemFromNetwork = {
  name: string;
  height: number;
  weight: number;
  sprites: {
      front_default: string;
  };
};

export type DetailItemProps = {
  name: string;
  height: number;
  weight: number;
  sprites: {
      frontDefault: string;
  };
};

const Pokemon = Record<DetailItemProps>({
  name: '',
  height: 0,
  weight: 0,
  sprites: {
    frontDefault: ''
  }
});
const initialDetailItem = new Pokemon();

export type PokemonDetailProps = {
  fetching: boolean,
  pokemon:  Pokemon
};

const PokemonDetail = Record<PokemonDetailProps>({
  fetching: false,
  pokemon: initialDetailItem
});

export const initialPokemonDetailState = new PokemonDetail();
