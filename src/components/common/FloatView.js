import React from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { observer, inject } from 'mobx-react';

@inject('storyStore')
@observer
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

    animatedClose() {
        this.animateValue.setValue(1);
        Animated.timing(
            this.animateValue, {
                toValue: 0,
                duration: 800,
                easing: Easing.linear
            }
        ).start(() => { this.props.storyStore.setIsShowStoryCard(false); });
    }
    render() {
        const bottomView = this.animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['-100%', '0%']
        });
        if (this.props.storyStore.isDismissFloatView) {
            this.animatedClose();
        }
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
