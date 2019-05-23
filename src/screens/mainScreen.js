import React from 'react';
import { Container, Button, Text, Header, Footer, FooterTab, Left, Body, Right, Icon } from 'native-base';
import AuthClass from '../apis/auth'

import Tab01Component from '../components/tab01'
import Tab02Component from '../components/tab02'
import Tab03Component from '../components/tab03'
import TabSettingComponent from '../components/tabSetting'
import ShowFromBottomView from '../components/animations/showFromBottomView'
// import TransformView from '../components/animations/transformView'
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation'

export default class MainScreen extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          tabState : 1,
      };
    }
    switchTab(tabNum){
        switch(tabNum){
            case 1:
                return <Tab01Component/>
            case 2:
                return <Tab02Component/>
            case 3:
                return <Tab03Component componentId = {this.props.componentId}/>
            case 4:
                return <TabSettingComponent/>
        }
    }
    onclick(){
        AuthClass.checkLogin().then(success => {
            console.log('session founded')
        })
        .catch(err => {
            console.log('no session founded')
        })
    }
    tabClicked(){
        
    }
    render(){
        console.log('MainScreen called')
        // Navigation.mergeOptions(this.props.componentId, {
        //     sideMenu: {
        //       left: {
        //         visible: false,
        //         enabled: false
        //       },
        //     },
        // });
        return(
            <ShowFromBottomView style={{flex:1}}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this.tabClicked.bind(this)}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={{flex:1}}>
                    {this.switchTab(this.state.tabState)}
                </View>
                <Footer>
                <FooterTab>
                    <Button onPress={() => this.setState({tabState : 1})}>
                        <Text>First</Text>
                    </Button>
                    <Button onPress={() => this.setState({tabState : 2})}>
                        <Text>Second</Text>
                    </Button>
                    <Button onPress={() => this.setState({tabState : 3})}>
                        <Text>Third</Text>
                    </Button>
                    <Button onPress={() => this.setState({tabState : 4})}>
                        <Text>Setting</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
            </ShowFromBottomView>
        )
    }
}
