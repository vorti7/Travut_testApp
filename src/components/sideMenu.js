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
                visible: false,
                enabled: false
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
                    <Text>0.</Text>
                </Button>
                <Button full onPress={() => {
                    this.onclick(1)}}>
                    <Text>1.</Text>
                </Button>
                <Button full success onPress={() => {
                    this.onclick(2)}}>
                    <Text>2.</Text>
                </Button>
                <Button full info onPress={() => {
                    this.onclick(3)}}>
                    <Text>3.</Text>
                </Button>
                <Button full warning onPress={() => {
                    this.onclick(4)}}>
                    <Text>4.</Text>
                </Button>
                <Button full danger onPress={() => {
                    this.onclick(5)}}>
                    <Text>5.</Text>
                </Button>
                <Button full dark>
                    <Text>Dark</Text>
                </Button>
                </Content>
            </Container>
        )
    }
}

