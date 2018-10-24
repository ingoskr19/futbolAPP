import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemPlayer = (props) => (
    <TouchableHighlight
        onPress={() => {props.navigation.navigate('PlayerDetailScreen', { player: props.player })}}
        underlayColor="#C0C0C0"
    >
        <View>
            <View style={styles.container}>
                <Image source={{ uri: props.player.strPlayerBadge }} style={styles.playerImage}/>
                <Text style={styles.playerName}>{props.player.strPlayer}</Text>
                <Text style={styles.playerManager}>{props.player.strManager}</Text>
                <Text style={styles.playerWebsite}>{props.player.strWebsite}</Text>
                <Text style={styles.playerCountry}>{props.player.strCountry}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 250,
        alignContent: 'space-around',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
    playerName: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    playerCountry: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    playerWebsite: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    playerManager: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    playerImage: {
        flex: 3,
        marginTop: 10,
        width: 190,
        alignSelf: 'center',
    },
    playerFooter: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 5,
    }
});

export default ItemPlayer;

