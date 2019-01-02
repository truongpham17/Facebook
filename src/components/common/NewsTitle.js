import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { OptionMenuDialog } from '../common';

type Props = {
    avatar: any,
    title: string,
    time: string,
    icon: any,
    titleDescription: string,
    style: {}
}

const NewsTitle = (props: Props) => {
    const { avatar, title, time, icon, titleDescription, style } = props;
    const { 
        containerStyle, 
        imageContainerStyle, 
        titleContainerStyle, 
        timeContainerStyle,
        textTimeStyle,
        textTitleStyle,
        imageStyle,
    } = styles;
    return (
        <View style={style}>
            { titleDescription ? 
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ flex: 16 }}>
                        <Text style={textTitleStyle}>{titleDescription}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <OptionMenuDialog />
                    </View>
                </View> : null
            }
            <View style={containerStyle}>
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
                { titleDescription ? null : 
                    <View style={{ marginStart: 8 }}>
                        <OptionMenuDialog />
                    </View>
                }
            </View>
        </View>
        
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        fontSize: 16,
        color: '#000000',
    },
    textTimeStyle: {
        fontSize: 13,
        color: '#000000',
    },
    imageStyle: {
        width: 16,
        height: 16,
    }
};

export { NewsTitle };
