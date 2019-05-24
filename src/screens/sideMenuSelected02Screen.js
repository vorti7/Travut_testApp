import React from 'react';
import { Text, Content, Card, CardItem, Body } from 'native-base';

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected02Screen extends React.Component{
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
        console.log('sidemenumain02view : ',this.props.componentId)
        console.log('SideMenuSelected02Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 02"}>
                <Text>This is Screen 02</Text>
                <Content padder>
                    <Card>
                    <CardItem header bordered>
                    <Text>Card Header</Text>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Text>
                        Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.
                        </Text>
                    </Body>
                    </CardItem>
                    <CardItem footer>
                    <Text>Card Footer</Text>
                    </CardItem>
                    </Card>
                </Content>
            </SideMenuSelectedBasedView>
        )
    }
}
