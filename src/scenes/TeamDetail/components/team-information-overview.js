import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {Header, Container, Content} from 'native-base'

export default TeamInformationOverview = (props) => {
    const team = props.team[0];

    return (<ScrollView>
        <Container>
            <Content>
                <Text style={styles.title}>Other Name</Text>
                <Text style={styles.text}>{team.strAlternate}</Text>

                <Text style={styles.title}>D.T</Text>
                <Text style={styles.text}>{team.strManager}</Text>

                <Text style={styles.title}>Formation Year</Text>
                <Text style={styles.text}>{team.intFormedYear}</Text>

                <Text style={styles.title}>Stadium</Text>
                <Text style={styles.text}>{team.strStadium} - {team.strStadiumLocation}</Text>

                <Text style={styles.title}>Capacity</Text>
                <Text style={styles.text}>{team.intStadiumCapacity}</Text>

                <Text style={styles.title}>History</Text>
                <Text style={styles.text}>{team.strDescriptionEN}</Text>
            </Content>
        </Container>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#d0efb1',
        fontSize: 16,
        marginBottom: 10,
    },
    title: {
        backgroundColor: '#fff',
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold',
    },
});
