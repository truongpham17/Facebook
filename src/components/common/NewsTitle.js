import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { OptionMenuDialog } from '../common';

type Props = {
    avatar: any, // source image require
    title: string,
    time: string,
    icon: any,
    titleDescription: string,
    textStyle: {}
}

const NewsTitle = (props: Props) => {
    const { avatar, title, time, icon, titleDescription, textStyle } = props;
    const { 
        containerStyle, 
        imageContainerStyle, 
        timeContainerStyle,
        textTimeStyle,
        textTitleStyle,
        imageStyle,
    } = styles;
    return (
        <View style={{ flex: 1 }}>
            { titleDescription ? 
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ flex: 16 }}>
                        <Text style={textTitleStyle}>{titleDescription}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <OptionMenuDialog />
                    </View>
                </View> : undefined
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={containerStyle}>
                    <View style={imageContainerStyle}>
                        <Avatar
                            source={avatar}
                            size="small"
                            rounded
                        />
                    </View>
                    <View>
                        <Text style={[textTitleStyle, textStyle]}>{title}</Text>
                        <View style={timeContainerStyle}>
                            <Text style={[textTimeStyle, textStyle]}>{time}</Text>
                            <Image
                                source={icon}
                                style={imageStyle}
                            />
                        </View>
                    </View>
                </View>
                
                { titleDescription ? undefined : 
                    <View style={{ marginStart: 8 }}>
                        <OptionMenuDialog textStyle={textStyle} />
                    </View>
                }
            </View>
        </View>
        
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imageContainerStyle: {
        marginEnd: 4,
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
