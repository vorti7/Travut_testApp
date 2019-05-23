import React from 'react';
import { View, Text } from 'react-native';
import MovingView from '../components/animations/movingView'
import ShowFromLeftView from './animations/showFromLeftView'

export default class Tab02Component extends React.Component{
    render(){
        console.log('Tab02 Component called')
        return(
            <ShowFromLeftView style={{backgroundColor: 'blue', flex:1}}>
            <MovingView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>This is Tab02.</Text>
            </MovingView>
            </ShowFromLeftView>
        )
    }
}