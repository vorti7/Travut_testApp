import React from 'react';
import { View, Text } from 'react-native';
import ShowFromLeftView from './animations/showFromLeftView'

export default class TabSettingComponent extends React.Component{
    render(){
        console.log('TabSetting Component called')
        return(
            <ShowFromLeftView style={{backgroundColor: 'yellow', flex:1}}>
                <Text>This is TabSetting.</Text>
            </ShowFromLeftView>
        )
    }
}