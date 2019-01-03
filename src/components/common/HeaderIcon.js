import React from 'react';
import { View, Image, Text } from 'react-native';
import { RoundNumber } from '../common';

const HeaderIcon = (props) => {
    const { icon, numberOfNotification } = props;
    return (
        <View>
            <Image 
                source={icon}
                style={{ height: 30, width: 30 }} 
            />
            { numberOfNotification ? 
                <View style={{ position: 'absolute', top: 2, right: 2 }}>
                    <RoundNumber containerStyle={{ width: 14, height: 14, backgroundColor: 'red' }}>
                        <Text style={{ fontSize: 9, color: '#ffffff' }}>{numberOfNotification}</Text>
                    </RoundNumber>
                </View>
            : null }
            
        </View>
    );
};
export { HeaderIcon };
