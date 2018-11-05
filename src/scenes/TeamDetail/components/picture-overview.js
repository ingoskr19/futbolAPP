import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import SocialIcon from './social-network-icon';
import { Container, Content } from 'native-base';

function onPress(uri, props) {
    props.navigation.navigate('WebViewScreen', { uri: uri });
};
const PictureOverview = (props) => {

    const team = props.team[0];
    const stdiumBacground = 'https://www.pes-patch.com/wp-content/uploads/2015/11/PES-2016-Santiago-Bernabeu-Stadium-by-tizziano-3.jpg';
    //strStadiumThumb
    return (
            <Container>
                <Content>
                    <ImageBackground
                        source={{ uri: (team.strStadiumThumb != '') ? team.strStadiumThumb: stdiumBacground }}
                        style={styles.imageBackground} >
                        <Image
                            source={{ uri: team.strTeamBadge }}
                            style={styles.teamImage} />
                        <Text style={styles.teamName}>{team.strTeam}</Text>
                    </ImageBackground>
                    <View style={styles.teamSocialNetworks}>
                        <SocialIcon icon="facebook" size={24}
                            onPress={() => onPress(team.strFacebook, props)} />

                        <SocialIcon icon="twitter" size={24}
                            onPress={() => onPress(team.strTwitter, props)} />

                        <SocialIcon icon="youtube" size={24}
                            onPress={() => onPress(team.strYoutube, props)} />

                        <SocialIcon icon="share-square"
                            onPress={() => onPress(team.strFacebook, props)} />
                    </View>
                </Content>
            </Container>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    teamSocialNetworks: {
        flexDirection: 'row',
        textAlign: 'center',
        alignContent: 'space-between'
    },
    teamName: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    teamImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode: 'contain',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
});

export default PictureOverview;

