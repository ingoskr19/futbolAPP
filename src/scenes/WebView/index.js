import React, { Component } from 'react';
import { WebView, View, StyleSheet, Text } from 'react-native';

class WebViewScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.navigation.getParam('uri', 'www.google.com'),
      text: "ReactNative WebView Sample"
    };

    this.onWebViewMessage = this.onWebViewMessage.bind(this);
  }


  handleDataReceived(msgData) {
    this.setState({
      text2: `Message from web view ${msgData.data}`
    });

    msgData.isSuccessfull = true;
    msgData.args = [msgData.data % 2 ? "green" : "red"];
    this.myWebView.postMessage(JSON.stringify(msgData));
  }

  onWebViewMessage(event) {
    console.log("Message received from webview");
    let msgData;
    try {
      msgData = JSON.parse(event.nativeEvent.data);
    } catch (err) {
      console.warn(err);
      return;
    }

    switch (msgData.targetFunc) {
      case "handleDataReceived":
        this[msgData.targetFunc].apply(this, [msgData]);
        break;
    }

  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>{this.state.text}</Text>
      <Text style={styles.welcome}>{this.state.text2}</Text>

        <WebView
          ref={webview => {
            this.myWebView = webview;
          }}
          style={{ marginTop: 20, flex: 4 }}
          source={{ uri: this.state.uri }}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          scrollEnabled={true}
          onMessage={this.onWebViewMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },
  welcome: {
    flex: 1,
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "skyblue"
  },
  text: {
    backgroundColor: 'yellow',
    color: 'black',
    flex: 1
  }
});

export default WebViewScene;