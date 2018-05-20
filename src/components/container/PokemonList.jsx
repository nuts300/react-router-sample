import * as React from 'react';
import { connect } from 'react-redux';

import TableList from 'components/presentational/TableList';
import PokemonItem from 'components/presentational/PokemonItem';

function PokemonList({ app }) {
    return (
    <div>
        <h2>Pokemon List!!!</h2>
        <TableList list={app.pokemonList.list} Item={PokemonItem} />
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

export default connect(mapState, mapDispatch)(PokemonList);