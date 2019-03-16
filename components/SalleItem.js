import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


class SalleItem extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>

                <Image style={styles.image}
                       source={{uri: this.props.salle.poster_path}}
                />

                <View style={styles.info_container}>
                    <View style={styles.head_container}>
                        <Text style={styles.text_titre}>{this.props.salle.title}</Text>
                        <Text style={styles.text_recor}>{this.props.salle.record}</Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={styles.text_description} numberOfLines={6}>{this.props.salle.overview}</Text>
                    </View>

                    <View style={styles.info_container}>
                        <Text style={styles.text_date}>{this.props.salle.release_date}</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 200,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        borderWidth: 0.5
    },
    image: {
        width: 120,
        height: 180,
        margin: 2,
    },
    info_container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5
    },
    head_container: {
        flexDirection: 'row',
        flex: 3
    },
    description_container: {
        flex: 7
    },
    date_container: {
        flex: 1
    },
    text_description: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    text_titre: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingRight: 5
    },
    text_recor: {
        color: 'grey',
        fontSize: 22
    },
    text_date: {
        textAlign: 'right',
        fontSize: 14
    },
    text: {
        fontSize: 16,
        margin: 5
    }
})

export default SalleItem