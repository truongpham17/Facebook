import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { NewsTitle, TextInput, RunningBar } from '../common';
import { Icon } from 'react-native-elements';
import { inject, observer } from 'mobx-react';

type Props = {
    avatar: any,
    contentImg: any,
    time: string,
    title: string,
}
@inject('storyStore')
@observer
class CardStory extends React.Component<Props> {
    render() {
        const { avatar, contentImg, time, title } = this.props;
        const { containerStyle, headerContainerStyle, imgContainer, bottomContainerStyle } = styles;
        console.log(title);
        return (
            <View style={{ flex: 1, padding: 6, backgroundColor: '#C3BCBA' }}>
                <RunningBar time={6000} viewStyle={{ backgroundColor: '#ffffff', height: 4 }} />
                <View style={containerStyle}>
                    <View style={headerContainerStyle}>
                        <NewsTitle 
                            avatar={avatar}
                            title={title}
                            time={time}
                            textStyle={{ color: '#ffffff' }}
                        />
                        <Icon 
                            name="close"
                            type="evilicon"
                            size={28}
                            color="#ffffff"
                            containerStyle={{ marginStart: 10 }}
                            onPress={() => { this.props.storyStore.setDismissFloatView(true); }}
                        />
                    </View>
                    <View style={imgContainer}>
                        <Image source={contentImg} style={{ flex: 1, width: undefined, height: undefined }} />
                    </View>
                    <View style={{ height: '8%', alignSelf: 'stretch' }}>
                    <ScrollView
                        directionalLockEnabled={false}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={bottomContainerStyle}>
                            <View style={{ padding: 6, width: 300 }}>
                                <TextInput
                                    placeholder="Reply..."
                                    icons={[
                                        <Icon 
                                            name="gif" 
                                            size={24} 
                                            color="#ffffff" 
                                            containerStyle={{ borderWidth: 1, borderColor: '#ffffff', borderRadius: 8 }} 
                                        />,
                                    ]}
                                    textStyle={{ color: '#ffffff' }}
                                    textContainerStyle={{ backgroundColor: '#666261' }}
                                    placeholderTextColor='#ffffff'
                                />
                            </View>
                            
                            <Image
                                source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif' }}
                                style={{ width: 50, height: 50 }}
                            />
                            <Image
                            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif' }}
                            style={{ width: 50, height: 50 }}
                            />
                            <Image
                            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/35c9bf34559659.56d57de0eb467.gif' }}
                            style={{ width: 50, height: 50 }}
                            />
                            <Image
                            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif' }}
                            style={{ width: 50, height: 50 }}
                            />
                            <Image
                            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eee1d34559659.56d59de621daa.gif' }}
                            style={{ width: 50, height: 50 }}
                            />
                            <Image
                            source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif' }}
                            style={{ width: 50, height: 50 }}
                            />
                           
                        </View>
                    </ScrollView>
                    </View>
                    
                    
                </View>
                
            </View>
            
        );
    }
}   

const styles = {
    containerStyle: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1,
    },
    imgContainer: {
        width: '100%',
        height: '60%'
    },
    headerContainerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        marginTop: 8,
        width: '100%',
        height: '10%'
    },
    bottomContainerStyle: {
        flexDirection: 'row',
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center',
    }
};

export { CardStory };
