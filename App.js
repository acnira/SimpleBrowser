import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

class App extends Component {

  constructor(props) {
    super(props);
    // 產生一個可以儲存 textInput DOM element 的 ref
    this.WEBVIEW = React.createRef();
    this.state=({
      homeUrl: 'https://github.com/facebook/react-native',
      currentUrl: 'https://github.com/facebook/react-native',
      canGoBack: false,
      canGoForward: false
    });
  }

  onNavigationStateChange(navState) {
    this.setState({
      currentUrl: navState.uri,
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward
    });
  }

  onBack() {
    this.WEBVIEW.current.goBack();
  }

  onForward() {
    this.WEBVIEW.current.goForward();
  }

  onReload() {
    this.WEBVIEW.current.reload();
  }

  onHomePressed() {
    this.setState({
      currentUrl: this.state.homeUrl
    });
    this.onReload();
  }

  render() {
    const homeUrl=this.state.homeUrl;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={this.WEBVIEW}
          source={{uri: homeUrl}}
          style={styles.webview}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onError={e => {
            return console.log(e);
          }}
        />
        <View style={styles.topbar} >
          <View style={styles.navBtn}>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}
              >
              <Text style={this.state.canGoBack?styles.topbarText:styles.topbarTextDisabled}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
            <TouchableOpacity
              disabled={!this.state.canGoForward}
              onPress={this.onForward.bind(this)}
              >
              <Text style={this.state.canGoForward?styles.topbarText:styles.topbarTextDisabled}>Forward</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
            <TouchableOpacity
              onPress={this.onHomePressed.bind(this)}
              >
              <Text style={styles.topbarText}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
          <TouchableOpacity
            onPress={this.onReload.bind(this)}
            >
            <Text style={styles.topbarText}>Reload</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  webview:{

  },
  topbar:{
    borderColor: "#959595",
    borderWidth: 2,
    paddingTop: 5,
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center'
  },
  navBtn:{
    borderColor: "#ff0000",
    borderWidth: 2,
    marginLeft: 2,
    marginRight: 2,
    flex: 1
  },
  topbarText:{
    fontSize: 20,
    color: "#2e79bf",
    textAlign:'center', 
    justifyContent:'center'
  },
  topbarTextDisabled:{
    fontSize: 20,
    color: "#454545",
    textAlign:'center', 
    justifyContent:'center'
  }
});

export default App;
