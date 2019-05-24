import React from 'react';
import { Grid, Col, Text, Icon, Badge, Content } from 'native-base';
// import SideMenuSelectedView from '../components/sideMenuSelectedBasedView'
// import AuthClass from '../apis/auth'

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
// import TransformView from '../components/animations/transformView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected00Screen extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        Navigation.mergeOptions(this.props.componentId, {
            // topBar: {
            //     leftButtons: [
            //       {
            //         id: 'buttonOne',
            //         text: 'menu'
            //         // icon: require('../assets/logo/test_logo.png')
            //       }
            //     ],
            //     rightButtons: [],
            // },
            sideMenu: {
              left: {
                visible: false,
                enabled: false
              },
            },
        });
        console.log('sidemenumain00view : ',this.props.componentId)
        console.log('SideMenuSelected00Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 00"}>
                <Grid>
                <Col style={{ backgroundColor: '#635DB7' }}>
                    <Text>This is Screen 00</Text>
                    <Badge>
                        <Text>2</Text>
                    </Badge>
                    <Badge primary>
                        <Text>2</Text>
                    </Badge>
                    <Badge success>
                        <Text>2</Text>
                    </Badge>
                    <Badge info>
                        <Text>2</Text>
                    </Badge>
                    <Badge warning>
                        <Text>2</Text>
                    </Badge>
                    <Badge danger>
                        <Text>2</Text>
                    </Badge>
                    <Badge primary>
                    <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                    </Badge>
                    <Badge style={{ backgroundColor: 'black' }}>
                        <Text style={{ color: 'white' }}>1866</Text>
                    </Badge>
                </Col>
                <Col style={{ backgroundColor: '#00CE9F' }}>
                    <Content>
                    <Icon name='home' />
                    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
                    <Icon type="FontAwesome" name="home" />
                    </Content>
                </Col>
                </Grid>
                
            </SideMenuSelectedBasedView>
        )
    }
}
