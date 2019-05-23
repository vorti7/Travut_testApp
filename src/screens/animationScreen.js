import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation'

export default class AnimationScreen extends React.Component{
    render(){
        console.log('FirstScreen called')
        return(
            <View>
                <Navigation.Element elementId='image2'>
                    <Text>This is Animation Screen.</Text>
                </Navigation.Element>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                <Text>This is Animation Screen.</Text>
                </View>
        )
    }
}