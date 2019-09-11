import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

export default function render() {
    ReactDOM.render(
        <Component.CascateClocks />,
        document.getElementById('root')
    );
}