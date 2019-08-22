/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Roots from './src/Root';

export default class CountersDemo extends Component {
    render() {
        return (
            <Root />
        );
    }
}


AppRegistry.registerComponent(appName, () => Roots);
