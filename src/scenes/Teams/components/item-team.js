import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemTeam = (props) => (
    <TouchableHighlight
        onPress={() => {props.navigation.navigate('TeamDetailScreen', { idTeam: props.team.idTeam })}}
        underlayColor="#C0C0C0"
    >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.team.strTeamBadge }} style={styles.teamImage}/>
                <Text style={styles.teamName}>{props.team.strTeam}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.teamManager}>{props.team.strManager}</Text>
                <Text style={styles.titleText}>D.T</Text>
                <Text style={styles.teamWebsite}>{props.team.strWebsite}</Text>
                <Text style={styles.titleText}>Website</Text>
                <Text style={styles.teamLeague}>{props.team.strLeague}</Text>
                <Text style={styles.titleText}>League</Text>
            </View>
            <View style={styles.iconNext}>
                <Icon color='#d0efb1' name={'chevron-right'} size={36}/>
            </View>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 2,
        backgroundColor: '#edf2f4'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: '#fff'
    },
    teamName: {
        backgroundColor: '#d0efb1',
        fontSize: 14,
        alignContent: 'flex-end',
        alignSelf: 'center',
        alignItems: 'flex-end'

    },
    teamImage: {
        flex: 2,
        marginTop: 10,
        width: 150,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    detailContainer: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 10,
        backgroundColor: '#edf2f4'
    },
    teamLeague: {
        fontSize: 11,
        marginTop: 5
    },
    teamWebsite: {
        fontSize: 11,
        marginTop: 5
    },
    teamManager: {
        fontSize: 11,
        marginTop: 5
    },
    titleText: {
        fontSize: 8,
        color: 'red'
    },
    iconNext: {
        alignSelf: 'center'
    }
});

export default ItemTeam;

