import React from 'react';
import { Animated, Easing, Dimensions } from 'react-native';

export default class ScaleView extends React.Component {
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
                duration : 1000,
                easing : Easing.linear,
                useNativeDriver: true
            }
        ).start()
    }
  
    render() {
      return (
        <Animated.View                 // Special animatable View
          style={{
              ...this.props.style,
              transform : [{scaleX: this.animatedValue},{scaleY:this.animatedValue}],
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  