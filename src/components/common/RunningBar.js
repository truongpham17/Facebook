import React from 'react';
import { View, Animated, Easing } from 'react-native';

type viewStyle = {
    backgroundColor: string,
    height: number,
}

type Props = {
    viewStyle: viewStyle,
    time: number
}

class RunningBar extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        this.animate();
    }
    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue, {
                toValue: 1,
                duration: this.props.time,
                easing: Easing.linear
            }
        ).start(() => this.animate());
    }
    render() {
        const widthAnimated = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%']
        });
        return (
            <View style={{ width: '100%', height: 4 }}>
                <Animated.View
                    style={[{ height: 4, width: widthAnimated, backgroundColor: 'red' }, this.props.viewStyle]}
                />
            </View>
        );
    }
}
export { RunningBar };
