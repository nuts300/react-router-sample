// @flow
import * as React from 'react';
import { isImmutable } from 'immutable';

export default function toJS<T>(WrappedComponent: React.Component<T, any> | React.StatelessFunctionalComponent<T>) {
    return (props: any): React.Node => {
        const KEY = 0;
        const VALUE = 1;
        // $FlowFixMe
        const propsJS: T = Object.entries(
            props
        ).reduce((newProps, prop) => {
            if (!isImmutable(prop[VALUE])) {
                newProps[prop[KEY]] = prop[VALUE];
                return newProps;
            }
            newProps[prop[KEY]] = prop[VALUE].toJS();
            return newProps
        }, {})
        // $FlowFixMe
        return <WrappedComponent {...propsJS} />
    };
}
