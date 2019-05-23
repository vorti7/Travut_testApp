import React from 'react';
import { View, Text, Button } from 'react-native';
import AuthClass from '../apis/auth'
import RNNNavigator from '../navigation/navigator'
import { Navigation } from 'react-native-navigation'

export default class FirstScreen extends React.Component{
    // constructor(props) {
    //     super(props);
    // }
    onclick(){
        AuthClass.checkLoginChangePage(this.props.componentId, "travut.mainScreen", "travut.secondScreen")
    }
    onclick2(){
        RNNNavigator.setRootTabScreen()
    }
    onclick3(){
        RNNNavigator.pushScreenWithAnim(this.props.componentId, "travut.animationScreen")
    }
    onclick4(){
        RNNNavigator.pushScreen(this.props.componentId, "travut.animationScreen")
    }
    onclick5(){
        RNNNavigator.showOverlay("spinnerOverlay", "travut.loadingOverlayComponent")
        // setTimeout("RNNNavigator.dismissOverlay('spinnerOverlay')", 3000);
    }
    onclick6(){
        AuthClass.logoutTraveler()
    }
    render(){
        console.log('FirstScreen called')
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
                <Navigation.Element elementId='image1'>
            
                <Text>This is First Screen.</Text>
                
                </Navigation.Element>

                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Text>This is First Screen.</Text>
                <Button
                    onPress={this.onclick.bind(this)}
                    title="button"
                    color="#999999"
                />
                <Button
                    onPress={this.onclick2.bind(this)}
                    title="button"
                    color="#999999"
                />
                <Button
                    onPress={this.onclick3.bind(this)}
                    title="button"
                    color="#999999"
                />
                <Button
                    onPress={this.onclick4.bind(this)}
                    title="button"
                    color="#999999"
                />
                <Button
                    onPress={this.onclick5.bind(this)}
                    title="button"
                    color="#999999"
                />
                <Button
                    onPress={this.onclick6.bind(this)}
                    title="logout"
                    color="#999999"
                />
            </View>
        )
    }
}