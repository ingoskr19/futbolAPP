import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SocialIcon from './social-network-icon';

const PictureOverview = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: props.team.strTeamBadge }} style={styles.teamImage}/>
        <Text style={styles.teamName}>{props.team.strTeam}</Text>
        <View style={styles.teamSocialNetworks}>
            <SocialIcon icon="facebook" size="24"
            onPress={()=>{props.navigation.navigate('WebView', {navigation: props.navigation})}} />
            
            <SocialIcon icon="twitter" size="24"
            onPress={()=>{props.navigation.navigate('WebView', {navigation: props.navigation})}}  />
            
            <SocialIcon icon="youtube" size="24"
            onPress={()=>{props.navigation.navigate('WebView', {navigation: props.navigation})}} />
            
            <SocialIcon icon="share-square" size="24"
            onPress={()=>{props.navigation.navigate('WebView', {navigation: props.navigation})}} />
        </View>
    </View>
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
    teamSocialNetworks: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    teamImage: {
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

export default PictureOverview;

