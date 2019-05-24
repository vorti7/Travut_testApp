import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ShowSideMenuButtonComponent extends React.Component{
    render(){
        console.log('ShowSideMenuButtonComponent called')
        return(
            <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        )
    }
}
