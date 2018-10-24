import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HttpLeagues from '../../services/Leagues/http-leagues';
import PictureOverview from './components/picture-overview';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  );

const SecondRoute = () => (
<View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
export default class TeamDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idTeam: this.props.navigation.getParam("idTeam","EMPTY"),
        playersList: [],
        team: [],
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

async getTeamData(){
    const filter = {
        params: {
            'id':this.state.idTeam
        }
      }
    if(this.state.idTeam == 'EMPTY'){
      this.showAlert('Nombre equipo no valido');
      return;
    }
    const players = await HttpLeagues.getPlayers(filter);
    await this.setState({
        playersList: players 
    });
    const team = await HttpLeagues.getTeamData(filter);
    await this.setState({
        team: team 
    });
  }

  render() {
    return (
      <View style={style.container}>
            <PictureOverview team={this.state.team}/>
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
