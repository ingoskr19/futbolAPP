import React from 'react';
import {StackNavigator} from 'react-navigation';
import Teams from '../Teams';
import TeamDetail from '../TeamDetail';
import WebView from '../WebView';

 export const TeamsNavigator = StackNavigator({
  TeamsScreen: {
    screen: Teams,
    navigationOptions: () => ({
      title: 'Teams'
    })
  },
  TeamDetailScreen: {
    screen: TeamDetail,
    navigationOptions: () => ({
      title: 'Team Detail'
    })
  },
  TeamDetailScreen: {
    screen: WebView,
    navigationOptions: () => ({
      title: 'Sitio Web'
    })
  }
}, {
  initialRouteName: 'TeamsScreen',
  headerStyle: {
    backgroundColor: '#7B1FA2',
    borderBottomColor: '#7B1FA2'
  },
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTintColor: '#7B1FA2',
});