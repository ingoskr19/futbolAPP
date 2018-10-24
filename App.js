import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TeamsNavigator } from './src/scenes/Navigation/navigation';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TeamsNavigator/>
    );
  }
}
