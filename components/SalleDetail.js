import React from 'react'
import {Image, StyleSheet, Text, View,} from 'react-native'


class SalleDetail extends React.Component {
    render() {
        return (
            <View style={styles.GlobalView}>
                <View style={styles.TitleView}>
                    <Text>
                        {this.props.salle.title}
                    </Text>
                </View>
                <View>
                    <Image style={styles.SplashSalle} source={{uri: this.props.salle.poster_path}}/>
                </View>
                <View style={styles.DescriptionView}>
                    <View style={styles.TextDescriptionView}>
                        <Text>
                            {this.props.salle.description}
                        </Text>
                    </View>
                    <View style={styles.ContentView}>
                        <Text>
                            {this.props.salle.release_date}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    GlobalView: {
        flex: 1,
    },
    TitleView: {
        flex: 1,
    },
    SplashSalle: {
        flex: 3,
    },
    DescriptionView: {
        flex: 6,
        flexDirection: 'column',
    },
    TextDescriptionView: {
        flex: 4,
    },
    ContentView: {
        flex: 1,
    },

})

export default SalleDetail