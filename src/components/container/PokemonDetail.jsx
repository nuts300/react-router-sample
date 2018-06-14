//@flow
import type { StateProps } from 'domain/store/state';

import * as React from 'react';
import { connect } from 'react-redux';
import toJS from 'components/utils/to_js'

function PokemonDetail({ pokemonDetail }: StateProps) {
    const pokemon = pokemonDetail.pokemon;
    const fetching = pokemonDetail.fetching;
    return (
    <div>
        <h2>Pokemon Detail!!!</h2>
        <div>
            <div className="column-sm-10">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        fetching?
                        <tr>
                            <td>Now loading ...</td>
                            <td></td>
                            <td></td>
                        </tr>:
                        <tr>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>
            <div className="column-sm-2">
            {
                !fetching  && pokemon.sprites &&
                <img src={ pokemon.sprites.front_default } alt={pokemon.name} />   
            }
            </div>
        </div>
    </div>
    );
}

function mapState(state) {
    return {
      ...state.app,
    };
}
function mapDispatch(/* dispatch: Dispatch */) {
    return {
        actions: {} // user action
    };
}

export default connect(mapState, mapDispatch)(toJS(PokemonDetail));