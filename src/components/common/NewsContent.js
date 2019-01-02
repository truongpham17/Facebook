import * as React from 'react';
import { View, Text, Image } from 'react-native';

type Props = {
    status: Array<String>,
    content: ?Array<React.Node>
}

const NewsContent = (props: Props) => {
    const { status, content } = props;
    const { statusStyle, contentStyle } = styles;
    const images = [];
    if (content) {
        content.forEach(element => {
            images.push(<Image source={element} style={{ height: undefined, width: undefined, flex: 1 }} />);
        });
    }
    
    return (
        <View>
            <View style={statusStyle}>
                <Text style={{ color: '#000000', fontSize: 18 }}>{status}</Text>
            </View>
            { content ? 
                (<View style={contentStyle}>
                    {images}
                </View>) : null
            }
            
        </View>
    );
};

const styles = {
    statusStyle: {
    },
    contentStyle: {
        width: '100%',
        height: 400,
        flexWrap: 'wrap'
    }
};

export { NewsContent };
