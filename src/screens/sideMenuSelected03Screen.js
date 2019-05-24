import React from 'react';
import { Text, ListItem, CheckBox, Body } from 'native-base';

import SideMenuSelectedBasedView from '../components/sideMenuSelectedBasedView'
import { Navigation } from 'react-native-navigation'

export default class SideMenuSelected03Screen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkBoxState01 : false,
            checkBoxState02 : false,
            checkBoxState03 : false
        };
    }
    checkBoxChangeState(checkBoxNum){
        switch (checkBoxNum) {
            case 1:
                // this.setState({chekBoxState01: !this.state.checkBoxState01})
                this.setState(previousState => (
                    { checkBoxState01: !previousState.checkBoxState01 }
                  ))
                break;
            case 2:
                // this.setState({chekBoxState02: !this.state.checkBoxState02})
                this.setState(previousState => (
                    { checkBoxState02: !previousState.checkBoxState02 }
                  ))
                break;
            case 3:
                // this.setState({chekBoxState03: !this.state.checkBoxState03})
                this.setState(previousState => (
                    { checkBoxState03: !previousState.checkBoxState03 }
                  ))
                break
          }
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
        console.log('sidemenumain03view : ',this.props.componentId)
        console.log('SideMenuSelected03Screen called')
        return(
            <SideMenuSelectedBasedView componentId = {this.props.componentId} headerTitle = {"Screen 03"}>
                <Text>This is Screen 03</Text>
                <ListItem>
                    <CheckBox onPress={this.checkBoxChangeState.bind(this, 1)} checked={this.state.checkBoxState01} />
                    <Body>
                    <Text>Daily Stand Up</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox onPress={this.checkBoxChangeState.bind(this, 2)} checked={this.state.checkBoxState02} />
                    <Body>
                    <Text>Discussion with Client</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox onPress={this.checkBoxChangeState.bind(this, 3)} checked={this.state.checkBoxState03} color="green"/>
                    <Body>
                    <Text>Finish list Screen</Text>
                    </Body>
                </ListItem>
            </SideMenuSelectedBasedView>
        )
    }
}
