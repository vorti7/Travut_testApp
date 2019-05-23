import React from 'react';
import { View, Image } from 'react-native';

export default class introOverlayComponent extends React.Component{
    render(){
        console.log('Intro Overlay Component called')
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                opacity: 1}}>
                <Image source={require('../assets/logo/test_logo.png')} />
            </View>
        )
    }
}

