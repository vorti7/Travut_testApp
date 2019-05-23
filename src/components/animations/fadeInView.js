import React from 'react';
import { Animated } from 'react-native';
export default class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        delay = this.props.delay ? this.props.delay : 0
        duration = this.props.duration ? this.props.duration : 1000
        this.state = {
          delay: delay,
          duration: duration,
          fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
      };
    }
    componentDidMount() {
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: this.state.duration,              // Make it take a while
          delay: this.state.delay
        }
      ).start();                        // Starts the animation
    }
    
    render() {
      let { fadeAnim } = this.state;
  
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...this.props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }
  