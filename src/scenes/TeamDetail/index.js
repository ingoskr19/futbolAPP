import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import HttpLeagues from '../../services/Leagues/http-leagues';
import PictureOverview from './components/picture-overview';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TeamInformationOverview from './components/team-information-overview';
import PlayersOverview from './components/players-overview';

/*<TeamInformationOverview team={team}/>*/

export default class TeamDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idTeam: this.props.navigation.getParam("idTeam", "EMPTY"),
            playersList: [],
            team: null,
            index: 0,
            routes: [
                { key: 'first', title: 'Team Information' },
                { key: 'second', title: 'Players' },
            ],
        };
    }

    componentDidMount = () => {
        this.getTeamData();
    }

    firstRoute = (team) => (
        <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
            <TeamInformationOverview team={this.state.team}/>
        </View>
    );
    
      /* */
      /**<PlayersOverview playersList={data} />; */
    secondRoute = () => (
        <View style={[styles.container, { backgroundColor: '#673ab7' }]}>
            <PlayersOverview playersList={this.state.playersList} navigation={this.props.navigation}/>
        </View>
    );

    async getTeamData() {
        const filter = {
            params: {
                'id': this.state.idTeam
            }
        }

        const players = await HttpLeagues.getPlayers(filter);
        await this.setState({
            playersList: players
        });

        const team = await HttpLeagues.getTeamById(filter);
        await this.setState({
            team: team
        });
    }

    render() {
        return ((this.state.team) ?
            <View style={styles.container}>
                <PictureOverview team={this.state.team} />
                {this.state.playersList ? <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: this.firstRoute,
                        second: this.secondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height - 10 }}
                /> : null}
            </View>
            : <ActivityIndicator title="Cargando..." size="large" color="#7efb7b" />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
