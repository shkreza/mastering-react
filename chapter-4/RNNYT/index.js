/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import { HomeScreen } from './src/components/HomeScreen.ios';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
