// @flow
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { MyListItem } from '../common';

type Props = {
    list: {}
}

class OptionMenu extends React.PureComponent {

    state = {
        data: [],
        isShowMore: false,
    };

    componentWillMount() {
        const dataList = [];
        const { list } = this.props;
        for (let i = 0; i < Math.min(4, list.length); i++) {
            dataList.push(list[i]);
        }
        this.setState({
            data: dataList,
            isShowMore: list.length > 4
        });
    }

    onPressItem(id) {
        console.log(`You pressed item ${id}`);
    }

    renderItem = ({ item }) => (
        <MyListItem
            data={item}
            onPressItem={this.onPressItem}
        />
    );

    renderFooter = () => {
        if (this.state.isShowMore) {
            return (
                <MyListItem
                    data={{ id: 'More', title: 'See more', icon: 'g-translate' }}
                    onPressItem={() => { this.setState({ data: this.props.list, isShowMore: false }); }}
                />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={this.renderFooter()}
                />
            </View>
            
        );
    }
}


export { OptionMenu };
