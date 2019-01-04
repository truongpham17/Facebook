import React from 'react';
import { View, Animated, Easing } from 'react-native';
import { inject, observer } from 'mobx-react';

type viewStyle = {
    backgroundColor: string,
    height: number,
}

type Props = {
    viewStyle: viewStyle,
    time: number
}
@inject('storyStore')
@observer
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
        ).start(() => { 
            this.props.storyStore.setDismissFloatView(true); 
            this.props.storyStore.setIsShowDialog(false);
        });
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
