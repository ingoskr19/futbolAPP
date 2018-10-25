import React, { Component } from 'react';
import {Platform, ScrollView, Text, SectionList, StyleSheet } from 'react-native';
import ItemTeam from './components/item-team';
import ItemSeparator from './components/item-separator';
import HttpLeagues from '../../services/Leagues/http-leagues';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamsList: [],
        };
    }

    componentDidMount = () => {
        this.getData()
    }
    
    async getData(){
        const filter = {
            params: {
                's':'Soccer',
                'c':'Spain'
            }
          }
        
        const data = await HttpLeagues.getTeams(filter);
        await this.setState({
            teamsList: data 
        });
      }

    renderItem = ({ item }) => <ItemTeam navigation={this.props.navigation} team={item} />
    itemSeparator = ({ item }) => <ItemSeparator navigation={this.props.navigation} team={item} />
    keyExtractor = (item) => item.idTeam.toString()
    render() {
        return (
            <ScrollView style={styles.container}>
                <SectionList
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    sections={[
                        {
                            data: this.state.teamsList
                        }
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

export default Teams;