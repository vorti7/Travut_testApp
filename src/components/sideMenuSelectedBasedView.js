import React from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Icon, Button } from 'native-base'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelectedBasedView extends React.Component {
    constructor (props) {
        super(props)
    }

    onclick(){
        console.log(this.props.componentId)
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
              left: {
                visible: true,
                enabled: true
              },
            },
        });
    }
  
    render() {
      return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={this.onclick.bind(this)}>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.headerTitle}</Title>
                </Body>
                <Right />
            </Header>
            {this.props.children}
        </Container>
      );
    }
  }
  