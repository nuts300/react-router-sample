// @flow
import type { StateRawProps } from 'domain/store/state';

import * as React from 'react';
import { connect } from 'react-redux';

import toJS from 'components/utils/to_js'
import TableList from 'components/presentational/TableList';
import PokemonItem from 'components/presentational/PokemonItem';

function PokemonList({ pokemonList }: StateRawProps) {
    return (
    <div>
        <h2>Pokemon List!!!</h2>
        <TableList list={pokemonList.list} Item={PokemonItem} />
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

export default connect(mapState, mapDispatch)(toJS(PokemonList));