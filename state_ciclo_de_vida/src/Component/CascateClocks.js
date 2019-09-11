import React from 'react';
import Clock from './Clock'

export default class CascateClocks extends React.Component {

    render() {
        return (
            <div>
                <h1>Relogio 1 -> </h1>
                <Clock />
                <h1>Relogio 2 -> </h1>
                <Clock />
                <h1>Relogio 3 -> </h1>
                <Clock />
            </div>
        );
    }
}