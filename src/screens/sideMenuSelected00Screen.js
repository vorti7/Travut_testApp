import React from 'react';
import { Container, Button, Text, Header, Footer, FooterTab, Left, Body, Right, Icon } from 'native-base';
import AuthClass from '../apis/auth'

import SideMenuSelectedView from '../components/animations/sideMenuSelectedView'
// import TransformView from '../components/animations/transformView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected00Screen extends React.Component{
    constructor(props) {
        super(props);
    }
    onclick(){
    }
    render(){
        console.log('sidemenumain00view : ',this.props.componentId)
        console.log('SideMenuSelected00Screen called')
        return(
            <SideMenuSelectedView>
                <Container>
                    <Text>This is Screen 00</Text>
                </Container>
            </SideMenuSelectedView>
        )
    }
}
