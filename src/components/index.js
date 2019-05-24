  import { Navigation } from 'react-native-navigation';

  import tab01Component from './tab01'
  import tab02Component from './tab02'
  import tab03Component from './tab03'
  import tabSettingComponent from './tabSetting'
  import loadingOverlayComponent from './loadingOverlay'
  import introOverlayComponent from './introOverlay'
  import modalTestComponent from './modalTest'
  import testComponent from './testView'
  import SideMenuComponent from './sideMenu';
  import ShowSideMenuButtonComponent from './buttons/showSideMenuButton'
  
  export function registerComponents() {
      Navigation.registerComponent('travut.tab01Component', () => tab01Component);
      Navigation.registerComponent('travut.tab02Component', () => tab02Component);
      Navigation.registerComponent('travut.tab03Component', () => tab03Component);
      Navigation.registerComponent('travut.tabSettingComponent', () => tabSettingComponent);
      Navigation.registerComponent('travut.loadingOverlayComponent', () => loadingOverlayComponent);
      Navigation.registerComponent('travut.introOverlayComponent', () => introOverlayComponent);
      Navigation.registerComponent('travut.modalTestComponent', () => modalTestComponent);
      Navigation.registerComponent('travut.testComponent', () => testComponent);
      Navigation.registerComponent('travut.sideMenuComponent', () => SideMenuComponent);
      Navigation.registerComponent('travut.button.showSideMenuButtonComponent', () => ShowSideMenuButtonComponent);
    }