import React from 'react';
import { Text } from 'native-base';

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected05Screen extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
              left: {
                visible: false,
                enabled: false
              },
            },
        });
        console.log('sidemenumain05view : ',this.props.componentId)
        console.log('SideMenuSelected05Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 05"}>
                <Text>This is Screen 05</Text>
            </SideMenuSelectedBasedView>
        )
    }
}
