import React from 'react';
import { View, Text } from 'react-native';

export default class TabScreen extends React.Component{
    render(){
        console.log('TabScreen called')
        return(
            <View>
                <Text>This is Tab Screen.</Text>
            </View>
        )
    }
}