import { Navigation } from 'react-native-navigation';

import introScreen from './introScreen'
import secondScreen from './secondScreen'
import mainScreen from './mainScreen'
import signupScreen from './signupScreen'
import tabScreen from './tabScreen'
import animationScreen from './animationScreen'
import sideMenuSelected00Screen from './sideMenuSelected00Screen'
import sideMenuSelected01Screen from './sideMenuSelected01Screen'
import sideMenuSelected02Screen from './sideMenuSelected02Screen'
import sideMenuSelected03Screen from './sideMenuSelected03Screen'
import sideMenuSelected04Screen from './sideMenuSelected04Screen'
import sideMenuSelected05Screen from './sideMenuSelected05Screen'

export function registerScreens() {
    Navigation.registerComponent('travut.introScreen', () => introScreen);
    Navigation.registerComponent('travut.secondScreen', () => secondScreen);
    Navigation.registerComponent('travut.mainScreen', () => mainScreen);
    Navigation.registerComponent('travut.signupScreen', () => signupScreen);
    Navigation.registerComponent('travut.tabScreen', () => tabScreen);
    Navigation.registerComponent('travut.animationScreen', () => animationScreen);
    Navigation.registerComponent('travut.sideMenuSelected00Screen', () => sideMenuSelected00Screen);
    Navigation.registerComponent('travut.sideMenuSelected01Screen', () => sideMenuSelected01Screen);
    Navigation.registerComponent('travut.sideMenuSelected02Screen', () => sideMenuSelected02Screen);
    Navigation.registerComponent('travut.sideMenuSelected03Screen', () => sideMenuSelected03Screen);
    Navigation.registerComponent('travut.sideMenuSelected04Screen', () => sideMenuSelected04Screen);
    Navigation.registerComponent('travut.sideMenuSelected05Screen', () => sideMenuSelected05Screen);
  }