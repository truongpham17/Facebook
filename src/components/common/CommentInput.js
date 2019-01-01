import React from 'react';
import { View } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { TextInput } from './index';

type Props = {
    avatar: any,
}
const CommentInput = (props: Props) => {
    const { containerStyle, containerTextStyle } = styles;
    return (
        <View style={containerStyle}>
            <Avatar
                source={props.avatar}
                rounded
                size="small"
            />
            <View style={containerTextStyle}>
                <TextInput
                    placeholder="Write a comment..."
                    icons={[
                        <Icon name="camera" type="evilicon" size={30} />,
                        <Icon name="emotsmile" type="simple-line-icon" size={20} />,
                    ]}
                />
            </View>
            
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 48,
        margin: 4,
        paddingStart: 4,
        paddingEnd: 4
    },
    containerTextStyle: {
        flex: 1,
        marginStart: 4,
        maxHeight: 36,
    }
};

export { CommentInput };
