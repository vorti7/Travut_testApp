import React from 'react';
import { Text, View } from 'react-native';
import ScaleView from './animations/scaleView'

export default class TestComponent extends React.Component{
    render(){
        console.log('test Component called')
        return(
            <View>
                <Text>This is Test Page</Text>
            </View>
        )
    }
}