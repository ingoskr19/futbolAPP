import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uri: this.props.url
    };
  }

  render() {
    return (
        <WebView
        source={{uri: this.state.uri}}
        style={{marginTop: 20}}
        />
    );
  }
}
