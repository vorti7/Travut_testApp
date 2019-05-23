import React from 'react';
import { Animated, Easing } from 'react-native';

export default class MovingView extends React.Component {
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
    }
  
    componentDidMount() {
        this.animate()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.spring(
            this.animatedValue,
            {
                toValue : 1
            }
        ).start(() => this.animate())
    }
  
    render() {
      const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
      })
      return (
        <Animated.View                 // Special animatable View
          style={{
              ...this.props.style,
              marginLeft :  movingMargin,
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  