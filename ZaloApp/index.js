import { AppRegistry } from 'react-native';
import App from './App';
import Intro from './src/components/Header';
import ShareStatus from './src/scenes/ShareStatus';
import { FirebaseListener } from './src/notification/FirebaseListener';

AppRegistry.registerComponent('ZaloApp', () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => FirebaseListener);
