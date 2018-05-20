import * as React from 'react';
import { Iterable } from 'immutable';

export default function toJS(WrappedComponent) {
    return (props) => {
        const KEY = 0;
        const VALUE = 1;
        const propsJS = Object.entries(
            props
        ).reduce((newProps, prop) => {
            if (!Iterable.isIterable(prop[VALUE])) {
                newProps[prop[KEY]] = prop[VALUE];
                return newProps;
            }
            newProps[prop[KEY]] = prop[VALUE].toJS();
            return newProps
        }, {})
        return <WrappedComponent {...propsJS} />
    };
}
