import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
        onError={e => {
          return console.log(e);
        }}
      />
    );
  }
}

export default App;
