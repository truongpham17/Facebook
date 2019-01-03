import * as React from 'react';
import { View } from 'react-native';

type Props = {
    containerStyle: {},
    children: React.Node
}

const RoundNumber = (props: Props) => {

    const { containerStyle, children } = props;

    return (
        <View style={[styles.containerStyle, containerStyle]}>
            {children}
        </View>
    );
};
const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    }
};

export { RoundNumber };
