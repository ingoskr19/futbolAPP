import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemPlayer = (props) => {
    return (
        <TouchableHighlight
            onPress={() => { console.log("Click::: " + props.player.strPlayer) }}
            underlayColor="#fff"
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: props.player.strThumb }} style={styles.playerImage} />
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.playerName}>{props.player.strPlayer}</Text>
                    <Text style={styles.playerPosition}>{props.player.strPosition}</Text>
                    <Text style={styles.playerNationality}>{props.player.strNationality}</Text>
                    <Text style={styles.playerDateBorn}>{props.player.dateBorn}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        alignContent: 'space-around',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
    playerName: {
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 10
    },
    playerPosition: {
        backgroundColor: '#fff',
        fontSize: 12,
        marginBottom: 10
    },
    playerNationality: {
        backgroundColor: '#fff',
        fontSize: 12,
        marginBottom: 10
    },
    playerDateBorn: {
        backgroundColor: '#fff',
        fontSize: 12,
        marginBottom: 10
    },
    imageContainer: {
        flex: 1,
    },
    informationContainer: {
        flex: 2
    },
    playerImage: {
        flex: 1,
        marginTop: 5,
        width: 80,
        resizeMode: 'contain',
    },
    informationContainer: {
        flexDirection: 'column'
    }
});

export default ItemPlayer;

