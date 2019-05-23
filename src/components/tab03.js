import React from 'react';
import { View, Text, Button } from 'react-native';
import ShowFromLeftView from './animations/showFromLeftView'
import RNNNavigator from '../navigation/navigator'

export default class Tab03Component extends React.Component{
    constructor(props) {
        super(props);
    }
    async onclick(){
        await RNNNavigator.pushScreen(this.props.componentId, 'travut.testComponent')
    }
    render(){
        console.log('Tab03 Component called')
        return(
            <ShowFromLeftView style={{backgroundColor: 'green', flex:1}}>
                <Text>This is Tab03.</Text>
                <Button
                    onPress={this.onclick.bind(this)}
                    title="button"
                    color="#999999"
                />
            </ShowFromLeftView>
        )
    }
}