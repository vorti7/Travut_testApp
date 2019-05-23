import { Navigation } from 'react-native-navigation';

import firstScreen from './firstScreen'
import secondScreen from './secondScreen'
import mainScreen from './mainScreen'
import signupScreen from './signupScreen'
import tabScreen from './tabScreen'
import animationScreen from './animationScreen'

export function registerScreens() {
    Navigation.registerComponent('travut.firstScreen', () => firstScreen);
    Navigation.registerComponent('travut.secondScreen', () => secondScreen);
    Navigation.registerComponent('travut.mainScreen', () => mainScreen);
    Navigation.registerComponent('travut.signupScreen', () => signupScreen);
    Navigation.registerComponent('travut.tabScreen', () => tabScreen);
    Navigation.registerComponent('travut.animationScreen', () => animationScreen);
  }