import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ItemTeam = (props) => (
    <TouchableHighlight
        onPress={() => {props.navigation.navigate('TeamDetailScreen', { idTeam: props.team.idTeam })}}
        underlayColor="#C0C0C0"
    >
        <View>
            <View style={styles.container}>
                <Image source={{ uri: props.team.strTeamBadge }} style={styles.teamImage}/>
                <Text style={styles.teamName}>{props.team.strTeam}</Text>
                <Text style={styles.teamManager}>{props.team.strManager}</Text>
                <Text style={styles.teamWebsite}>{props.team.strWebsite}</Text>
                <Text style={styles.teamCountry}>{props.team.strCountry}</Text>
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
    teamName: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    teamCountry: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    teamWebsite: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    teamManager: {
        backgroundColor: '#fff',
        fontSize: 20,
        flex: 1
    },
    teamImage: {
        flex: 3,
        marginTop: 10,
        width: 190,
        alignSelf: 'center',
    },
    teamFooter: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 5,
    }
});

export default ItemTeam;

