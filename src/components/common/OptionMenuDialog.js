import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { OptionMenu } from '.';
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';
import { inject, observer } from 'mobx-react';

type Props = {
    textStyle: {}
}

@inject('storyStore')
@observer
class OptionMenuDialog extends React.Component<Props> {
    
    state = {
        isShow: false,
    }

    render() {
        const { textStyle } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => { this.props.storyStore.setIsShowDialog(true); }}>
                    <View>
                        <Text style={[{ fontSize: 18, fontWeight: 'bold' }, textStyle]}>···</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Dialog
                    visible={this.props.storyStore.isShowDialog}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    width={1}
                    dialogStyle={{ position: 'absolute', bottom: 0, borderRadius: 0 }}
                    onTouchOutside={() => { this.props.storyStore.setIsShowDialog(false); }}
                    overlayOpacity={0.2}
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
                                    { id: 'I06', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I07', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
                                    { id: 'I08', title: 'Translate', description: 'Translate this page', icon: 'g-translate' },
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
