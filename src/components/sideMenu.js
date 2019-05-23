import React from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Navigation } from "react-native-navigation";

export default class SideMenuComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        // Navigation.mergeOptions(this.props.componentId, {
        //     sideMenu: {
        //       left: {
        //         visible: false,
        //         enabled: false
        //       },
        //     },
        // });
        console.log('SideMenu Component called')
        return(
            <Container>
                <Header />
                <Content>
                <Button full light>
                    <Text>Light</Text>
                </Button>
                <Button full>
                    <Text>Primary</Text>
                </Button>
                <Button full success>
                    <Text>Success</Text>
                </Button>
                <Button full info>
                    <Text>Info</Text>
                </Button>
                <Button full warning>
                    <Text>Warning</Text>
                </Button>
                <Button full danger>
                    <Text>Danger</Text>
                </Button>
                <Button full dark>
                    <Text>Dark</Text>
                </Button>
                </Content>
            </Container>
        )
    }
}

