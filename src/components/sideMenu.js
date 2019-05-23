import React from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Navigation } from "react-native-navigation";
import RNNNavigator from "../navigation/navigator"

export default class SideMenuComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // sideSelectedState : 0,
        };
    }
    onclick(selectedNum){
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
              'left': {
                visible: false
              }
            }
        });
        targetScreenNum = selectedNum + ""
        if (targetScreenNum.length < 2){
            targetScreenNum = "0" + targetScreenNum
        }
        RNNNavigator.setRootScreen('AppStack', "travut.sideMenuSelected" + targetScreenNum + "Screen")
    }
    render(){
        console.log('SideMenu Component called')

        // console.log('sideMenu : ',this.props.componentId)
        // console.log('sideMenu Selected view num : ',this.state.sideSelectedState)

        return(
            
            <Container>
                <Header />
                <Content>
                <Button full light onPress={() => {
                    this.onclick(0)}}>
                    <Text>Light</Text>
                </Button>
                <Button full onPress={() => {
                    this.onclick(1)}}>
                    <Text>Primary</Text>
                </Button>
                <Button full success onPress={() => {
                    this.onclick(2)}}>
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

