/**
 * @format
 */
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens"
import { registerComponents } from "./src/components"

registerScreens()
registerComponents()


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'travut.sideMenuComponent'
          }
        },
        center: {
          stack: {
            id: 'AppStack',
            children: [
              {
                component: {
                  name: 'travut.introScreen'
                }
              }
            ]
          }
        }
      }
    }
  });
  // Navigation.setRoot({
  //   root: {
  //     stack: {
  //       id: 'AppStack',
  //       children: [
  //         {
  //           component: {
  //             name: 'travut.firstScreen'
  //           }
  //         }
  //       ],
  //       options :{
  //         sideMenu: {
  //           left: {
  //             visible: false,
  //             component: {
  //               name: 'travut.sideMenuComponent'
  //             }
  //           },
  //           center: {
      
  //           }
  //         },
  //       }
  //     }
  //   }
  // });
  // Navigation default setting
  Navigation.setDefaultOptions({
    topBar: { // disable topbar
      visible: false,
      drawBehind: true,
      animate: false,
    },
    // animations: {
    //   push: {
    //     enable: true,
    //     content: {
    //       scaleX :{
    //         from: 0,
    //         to: 1,
    //         duration: 500,
    //         startDelay: 0,
    //         interpolation: 'accelerate'
    //       },
    //       scaleY :{
    //         from: 0,
    //         to: 1,
    //         duration: 500,
    //         startDelay: 0,
    //         interpolation: 'accelerate'
    //       },
    //       alpha: {
    //         from: 0,
    //         to: 1,
    //         duration: 400,
    //         startDelay: 100,
    //         interpolation: 'accelerate'
    //       }
    //     }
    //   }
    // }
  });
  
});


