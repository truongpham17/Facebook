import React from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

class FloatView extends React.Component {
    constructor(props) {
        super(props);
        this.animateValue = new Animated.Value(0);
    }
    componentDidMount() {
        this.animate();
    }
    animate() {
        this.animateValue.setValue(0);
        Animated.timing(
            this.animateValue, {
                toValue: 1,
                duration: 800,
                easing: Easing.linear
            }
        ).start();
    }
    render() {
        const bottomView = this.animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['-100%', '0%']
        });
        return (
            <Animated.View 
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    bottom: bottomView,
                }}
            >   
                    {this.props.children}
            </Animated.View>
        );
    }
};
export { FloatView };
