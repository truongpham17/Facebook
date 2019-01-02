
import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class MyListItem extends React.PureComponent {


    onPress = () => {
        const { id } = this.props.data;
        this.props.onPressItem(id);
    };

    render() {
        const { icon, title, description } = this.props.data;
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', backgroundColor: '#ffffff', padding: 8 }}>
                    <View style={{ flex: 1 }}>
                        <Icon 
                            name={icon}
                        />
                    </View>
                    
                    <View style={{ flex: 8, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>{title}</Text>
                        {description ? <Text style={{ fontSize: 12 }}>{description}</Text> : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
        
        
    }
}

export { MyListItem };
