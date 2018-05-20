import * as React from 'react';
import { connect } from 'react-redux';

function PokemonDetail({ app }) {
    const pokemon = app.pokemonDetail.pokemon;
    const fetching = app.pokemonDetail.fetching;
    console.log('pokemon', pokemon);
    console.log('isFetching', fetching);
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
      app: state.app,
    };
}
function mapDispatch(dispatch) {
    return {
        actions: {} // user action
    };
};

export default connect(mapState, mapDispatch)(PokemonDetail);