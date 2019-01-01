import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

type Props = {
    avatar: any,
    title: string,
    time: string,
    icon: any,
    style: {}
}

const NewsTitle = (props: Props) => {
    const { avatar, title, time, icon } = props;
    const { 
        containerStyle, 
        imageContainerStyle, 
        titleContainerStyle, 
        timeContainerStyle,
        textTimeStyle,
        textTitleStyle,
        imageStyle,
        style
    } = styles;
    return (
        <View style={[containerStyle, style]}>
            <View style={imageContainerStyle}>
                <Avatar
                    source={avatar}
                    size="small"
                    rounded
                />
            </View>
            <View style={titleContainerStyle}>
                <Text style={textTitleStyle}>{title}</Text>
                <View style={timeContainerStyle}>
                    <Text style={textTimeStyle}>{time}</Text>
                    <Image
                        source={icon}
                        style={imageStyle}
                    />
                </View>
                
            </View>
            
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    imageContainerStyle: {
        marginEnd: 4,
    },
    titleContainerStyle: {
    },
    timeContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textTitleStyle: {
        fontSize: 14,
        color: '#000000',
    },
    textTimeStyle: {
        fontSize: 10,
        color: '#000000',
    },
    imageStyle: {
        width: 10,
        height: 10,
    }
};

export { NewsTitle };
