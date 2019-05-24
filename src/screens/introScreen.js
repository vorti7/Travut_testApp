import React from 'react';
import { View, Text, Button } from 'react-native';
import AuthClass from '../apis/auth'
import RNNNavigator from '../navigation/navigator'
import { Navigation } from 'react-native-navigation'

export default class IntroScreen extends React.Component{
    componentDidMount() {
        RNNNavigator.showOverlay("introOverlay", "travut.introOverlayComponent")
    }

    onclick(){
        // AuthClass.checkLoginChangePage(this.props.componentId, "travut.mainScreen", "travut.secondScreen")
        console.log('introScreen : ',this.props.componentId)
        RNNNavigator.setRootScreen(this.props.componentId, "travut.sideMenuSelected00Screen")
    }

    render(){
        console.log('IntroScreen called')

        // Navigation.mergeOptions(this.props.componentId, {
        //     topBar: { // disable topbar
        //         visible: false,
        //         drawBehind: true,
        //         animate: false,
        //     },
        // });

        
        setTimeout(() => {RNNNavigator.dismissOverlay("introOverlay")}, 3000)
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
              left: {
                visible: false,
                enabled: false
              },
            },
        });
        return(
            <View>
                <Text>This is Intro Screen.</Text>

                <Button
                    onPress={this.onclick.bind(this)}
                    title="Start Application"
                    color="#999999"
                />
            </View>
        )
    }
}