import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AuthClass from '../apis/auth'
import RNNNavigator from '../navigation/navigator'

export default class SecondScreen extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          emailState : '',
          passwordState : ''
      };
    }
    loginButtonClicked(){
        console.log('Login button clicked')
        AuthClass.loginTraveler(this.state.emailState, this.state.passwordState)
            .then(success => {
                Alert.alert(success)
                RNNNavigator.setRootScreen(this.props.componentId, "travut.mainScreen")
            })
            .catch(err => Alert.alert(err))
    }
    signupClicked(){
        console.log('Sign up button clicked')
        RNNNavigator.pushScreen(this.props.componentId, "travut.signupScreen")
    }
    
    render(){
        console.log('SecondScreen called')
        return(
            <View>
                <Text>This is Second Screen.</Text>
                <View>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({emailState: email})}/>
                </View>
        
                <View>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({passwordState: password})}/>
                </View>
                <Button
                    onPress={this.loginButtonClicked.bind(this)}
                    title="Login"
                    color="#999999"
                />
                <Button
                    onPress={this.signupClicked.bind(this)}
                    title="Sign up"
                    color="#999999"
                />
            </View>
        )
    }
}