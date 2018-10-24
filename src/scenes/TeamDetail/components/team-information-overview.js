import React from 'react';
import { Text, View } from 'react-native';

const TeamInformationOverview = (props) => (
    <View>
        <Text style={styles.teamName}>{props.team.strTeam}</Text>
        <Text style={styles.teamManager}>{props.team.strManager}</Text>
        <Text style={styles.teamWebsite}>{props.team.strWebsite}</Text>
        <Text style={styles.teamCountry}>{props.team.strCountry}</Text>
    </View>
);

const styles = StyleSheet.create({
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
    }
});

export default TeamInformationOverview;
