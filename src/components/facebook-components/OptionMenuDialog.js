import React from 'react';
import { View } from 'react-native';
import { OptionMenu } from '../common';
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';

const OptionMenuDialog = (props) => {
    return (
            <Dialog
                visible={props.isShow}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                width={1}
                dialogStyle={{ position: 'absolute', bottom: 0, borderRadius: 0 }}
                onTouchOutside={() => { props.onTouchOutside(); }}
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
                
    );
};

export { OptionMenuDialog };
