import React from 'react';
import { Content, Accordion } from 'native-base';

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
import { Navigation } from 'react-native-navigation'

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class SideMenuSelected01Screen extends React.Component{
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
        console.log('sidemenumain01view : ',this.props.componentId)
        console.log('SideMenuSelected01Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 01"}>
                <Content padder>
                <Accordion
                    dataArray={dataArray}
                    icon="add"
                    expandedIcon="remove"
                    iconStyle={{ color: "green" }}
                    expandedIconStyle={{ color: "red" }}
                />
                </Content>
            </SideMenuSelectedBasedView>
        )
    }
}
