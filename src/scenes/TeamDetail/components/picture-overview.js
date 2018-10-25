import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SocialIcon from './social-network-icon';

const PictureOverview = (props) => {
    
    const team = props.team[0];
    
    return (
    <View style={styles.container}>
        <Text style={styles.teamName}>{team.strTeam}</Text>
        <Image source={{ uri: team.strTeamBadge }} style={styles.teamImage}/>
        <View style={styles.teamSocialNetworks}>
            <SocialIcon icon="facebook" size={24} style={styles.socialIcon}
            onPress={()=>{props.navigation.navigate('WebViewScreen', {navigation: props.navigation})}} />
            
            <SocialIcon icon="twitter" size={24} style={styles.socialIcon}
            onPress={()=>{props.navigation.navigate('WebViewScreen', {navigation: props.navigation})}}  />
            
            <SocialIcon icon="youtube" size={24} style={styles.socialIcon}
            onPress={()=>{props.navigation.navigate('WebViewScreen', {navigation: props.navigation})}} />
            
            <SocialIcon icon="share-square" size={24} style={styles.socialIcon}
            onPress={()=>{props.navigation.navigate('WebView', {navigation: props.navigation})}} />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginBottom: 2,
    },
    teamSocialNetworks: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        alignContent: 'space-between'
    },
    teamName: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialIcon: {
        flex: 1,
        alignSelf: 'center'
    },
    teamImage: {
        flex: 3,
        marginTop: 2,
        width: 100,
        resizeMode: 'contain',
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

