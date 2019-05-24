import React from 'react';
import { Text } from 'native-base';

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected04Screen extends React.Component{
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
        console.log('sidemenumain04view : ',this.props.componentId)
        console.log('SideMenuSelected04Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 04"}>
                <Text>This is Screen 04</Text>
            </SideMenuSelectedBasedView>
        )
    }
}
