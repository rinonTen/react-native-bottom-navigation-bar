/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// makes swipe working on android
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
// makes swipe working on android
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));