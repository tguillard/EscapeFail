// Components/Search.js

import React from 'react'
import {ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native'
import SalleItem from "./SalleItem";
import SalleData from '../Helpers/SalleData'
import SearchIndex from './../screens/Search'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {salle: SalleData, isLoading: false};
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this.state.salle}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({item}) =>
                            <TouchableOpacity style={{flex: 1}} onPress={() => this.navigate('SalleScreen')}>
                                <SalleItem salle={item}/>
                            </TouchableOpacity>
                    }
                />
            </View>
        )
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>)
        }
    }

    _loadSalle() {
        this.setState({isLoading: true})
        this.setState({salle: SalleData, isLoading: false});
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    button: {
        color: '#DCDCDC',
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
    }
})

export default Search
