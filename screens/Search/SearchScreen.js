import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Search from './../../components/Search'

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Salles',
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <Search navigate={navigate}/>
        )
    }
}
