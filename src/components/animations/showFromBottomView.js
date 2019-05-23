import React from 'react';
import { Animated, Easing } from 'react-native';

export default class ShowFromBottomView extends React.Component {
    constructor () {
        super()
        this.animatedValue = new Animated.Value(-1000)
    }
  
    componentDidMount() {
        this.animate()
    }
    animate() {
        Animated.spring(
            this.animatedValue,
            {
                toValue : 0,
                speed : 9
            }
        ).start()
    }
  
    render() {
      return (
        <Animated.View                 // Special animatable View
          style={{
              ...this.props.style,
              bottom :  this.animatedValue,
              right : this.animatedValue
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  