import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { OptionMenu } from '.';
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';

type Props = {
    textStyle: {}
}

class OptionMenuDialog extends React.Component<Props> {
    
    state = {
        isShow: false,
    }
    onTouchOutside() {
        this.setState({ isShow: false });
    }

    render() {
        const { textStyle } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => { this.setState({ isShow: true }); }}>
                    <View>
                        <Text style={[{ fontSize: 18, fontWeight: 'bold' }, textStyle]}>···</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Dialog
                    visible={this.state.isShow}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    width={1}
                    dialogStyle={{ position: 'absolute', bottom: 0, borderRadius: 0 }}
                    onTouchOutside={() => { this.setState({ isShow: false }); }}
                >
                    <DialogContent>
                        <View style={{ width: '100%', height: '100%' }}>
                            <OptionMenu
                                list={[
                                    { id: 'I01', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I02', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I03', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I04', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I05', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I05', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I05', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I05', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                ]}
                            />
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
            
                
    );
    }
   
};

export { OptionMenuDialog };
