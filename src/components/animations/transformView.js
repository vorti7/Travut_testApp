import React from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

export default class TransformView extends React.Component {
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
    }
  
    componentDidMount() {
        this.animate()
    }
    animate() {
        Animated.timing(
            this.animatedValue,
            {
                toValue : 1,
                duration : 2000,
                easing : Easing.linear,
                useNativeDriver: true
            }
        ).start()
    }
  
    render() {
      const spin = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '60deg']
      })
      return (
        <Animated.View                 // Special animatable View
          style={{
              ...this.props.style,
              transform : [{translateX: - Dimensions.get('window').width * 0.24},{rotateY:spin}],
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  