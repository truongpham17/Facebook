import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {
    status: Array<String>,
    content: Array<React.Node>
}

const NewsContent = (props: Props) => {
    const { status, content } = props;
    const { statusStyle, contentStyle } = styles;
    const images = [];
    content.forEach(element => {
        images.push(element);
    });
    return (
        <View>
            <View style={statusStyle}>
                <Text style={{ color:"#000000" }}>{status}</Text>
            </View>
            <View style={contentStyle}>
               {images}
            </View>
        </View>
    );
};

const styles = {
    statusStyle: {
        margin: 8
    },
    contentStyle: {
        maxHeight: 600,
        minHeight: 300,
        width: null,
        flex: 1,
    }
};

export { NewsContent };
