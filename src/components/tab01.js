import React from 'react';
import { View, Text, Button } from 'react-native';
import FadeInView from '../components/animations/fadeInView'
import ShowFromLeftView from './animations/showFromLeftView'
import RNNNavigator from '../navigation/navigator'

export default class Tab01Component extends React.Component{
    onclick(){
        RNNNavigator.showModal("travut.modalTestComponent")
    }
    render(){
        console.log('Tab01 Component called')
        return(
            <ShowFromLeftView style={{flex:1, backgroundColor: 'red'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>This is Tab01.</Text>
                </FadeInView>
                <FadeInView delay = {1000} duration = {3000} style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>This is Tab01.</Text>
                </FadeInView>
                <Button
                    onPress={this.onclick.bind(this)}
                    title="button"
                    color="#999999"
                />
            </ShowFromLeftView>
        )
    }
}

