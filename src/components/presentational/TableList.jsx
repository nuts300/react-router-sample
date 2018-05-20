import * as React from 'react';

export default function List({ Item, list }) {
    const contents = list.map((v, index) => <Item key={index} {...v} />);
    return (
    <table className='table'>
        <thead>
            <tr>
                <th>Results({list.length})</th>
            </tr>
        </thead>
        <tbody>
            {contents}
        </tbody>
    </table>
    );
}
