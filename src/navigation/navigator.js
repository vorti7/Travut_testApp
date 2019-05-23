import { Navigation } from "react-native-navigation"


// cmpId -> this.props.componentId
const RNNNavigator = {
    pushScreen(cmpId, targetScreen){
        Navigation.push(cmpId, {
            component: {
              name: targetScreen
            }
        });
    },

    pushScreenWithAnim(cmpId, targetScreen){
      Navigation.push(cmpId, {
          component: {
            name: targetScreen,
            options: {
              customTransition: {
                animations: [
                  { type: 'sharedElement', fromId: 'image1', toId: 'image2', startDelay: 0, springVelocity: 0.2, duration: 0.5 }
                ],
                duration: 0.8
              }
            }
          }
      });
  },

    
    setRootScreen(cmpId, targetScreen){
      Navigation.setStackRoot(cmpId, [
        {
            component: {
              name: targetScreen,
            }
        }
      ]);
    },
    
    setRootTabScreen(){
      Navigation.setRoot({
        root:{
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack:{
                  children:[
                    {
                      component: {
                        name: "travut.tab01Component"
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      title: "Tab 1"
                    }
                  }
                }
                
              },
              {
                stack:{
                  children:[
                    {
                      component: {
                        name: "travut.tab02Component"
                      }
                    }
                  ],
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      title: "Tab 2"
                    }
                  }
                }
                
              },
            ]
          }
        }
      })

      // Navigation.setStackRoot(cmpId, {
        // bottomTabs: {
        //   children: [
        //     {
        //       component: {
        //         name: "travut.tab01Component",
        //         options: {
        //           topTab: {
        //             title: "Tab 1"
        //           }
        //         }
        //       }
        //     },
        //     {
        //       component: {
        //         name: "travut.tab02Component",
        //         options: {
        //           topTab: {
        //             title: "Tab 2"
        //           }
        //         }
        //       }
        //     },
        //   ]
        // }
      // });
    },
    
    popScreen(cmpId){
      Navigation.pop(cmpId);
    },
    
    popToRootScreen(cmpId){
      Navigation.popToRoot(cmpId);
    },
    
    popToScreen(targetScreen){
      Navigation.popTo(targetScreen);
    },
    
    showModal(targetScreen){
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: targetScreen,
              passProps: {
                text: 'stack with one child'
              },
              options: {
                topBar: {
                  title: {
                    text: 'Modal'
                  }
                }
              }
            }
          }]
        }
      });
    },
    
    dismissModal(cmpId){
      console.log('Dismiss a Modal')
      Navigation.dismissModal(cmpId);
    },
    
    dismissAllModal(){
      console.log('Dismiss All Modal')
      Navigation.dismissAllModals();
    },

    showOverlay(targetId, targetScreen){
      Navigation.showOverlay({
        component: {
          id : targetId,
          name: targetScreen,
          options: {
            overlay: {
              interceptTouchOutside: true
            }
          }
        }
      });
    },

    dismissOverlay(targetId){
      Navigation.dismissOverlay(targetId);
    }
}

export default RNNNavigator