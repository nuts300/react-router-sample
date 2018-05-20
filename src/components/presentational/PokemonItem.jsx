import * as React from 'react';

export default function PokemonItem({ name, url }) {
    return (
    <tr>
        <td>{name}</td>
        <td>{url}</td>
    </tr>
    );
}