import React from 'react';
import { Container, Button, Text, Header, Footer, FooterTab, Left, Body, Right, Icon } from 'native-base';
import AuthClass from '../apis/auth'

import SideMenuSelectedView from '../components/animations/sideMenuSelectedView'
// import TransformView from '../components/animations/transformView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected01Screen extends React.Component{
    constructor(props) {
        super(props);
    }
    onclick(){
    }
    render(){
        console.log('SideMenuSelected01Screen called')
        return(
            <SideMenuSelectedView>
                <Container>
                    <Text>This is Screen 01</Text>
                </Container>
            </SideMenuSelectedView>
        )
    }
}
