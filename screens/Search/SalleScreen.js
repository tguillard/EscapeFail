import React from 'react';
import {StyleSheet} from 'react-native';
import SalleDetail from './../../components/SalleDetail'

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Salle',
    };

    render() {
        return (
            <SalleDetail/>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
