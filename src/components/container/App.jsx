import * as React from 'react';
import { Link } from 'react-router';

export default function App({ children }) {
    return(
    <div>
        <h1>app!!!</h1>
        <ul>
            <li><Link to="/dashboard">dashboard</Link></li>
            <li><Link to="/login">login</Link></li>
        </ul>
        <div>{ children }</div>
    </div>
    );
}