import React from 'react';
import {StyleSheet} from 'react-native';
import Search from './../../components/Search'

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Salles',
    };

    render() {
        return (
            <Search/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
