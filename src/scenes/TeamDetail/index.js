import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import HttpLeagues from '../../services/Leagues/http-leagues';
import PictureOverview from './components/picture-overview';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TeamInformationOverview from './components/team-information-overview';
import PlayersOverview from './components/players-overview';
import { Container, Content } from 'native-base';

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

    firstRoute = () => (
        <View>
            <TeamInformationOverview team={this.state.team} navigation={this.props.navigation}/>
        </View>
    );
    
      /* */
      /**<PlayersOverview playersList={data} />; */
    secondRoute = () => (
        <View>
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
                <Container>
                <PictureOverview team={this.state.team} navigation={this.props.navigation}/>
                {this.state.playersList ? <TabView 
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: this.firstRoute,
                        second: this.secondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                /> : <ActivityIndicator size="large" color="#7efb7b" />}
            </Container>
            : <ActivityIndicator size="large" color="#7efb7b" />
        );
    }
}

const styles = StyleSheet.create({
});
