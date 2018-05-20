import * as React from 'react';
import { Link } from 'react-router';

export default function PokemonItem({ name, url }) {
    return (
    <tr>
        <td><Link to={`/pokemondetail/${name}`}>{name}</Link></td>
        <td>{url}</td>
    </tr>
    );
}