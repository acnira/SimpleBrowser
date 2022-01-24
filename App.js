/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TouchableOpacity, Button, Text, StyleSheet, Modal, Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {WebView} from 'react-native-webview';

class App extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW = React.createRef();
    this.state = {
      homeUrl: 'https://comdir.ust.hk',
      currentUrl: 'https://comdir.ust.hk',

      canGoBack: false,
      canGoForward: false,
      networkConnected: true,
      showDialog: false,
    };

    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (this.state.networkConnected !== state.isConnected) {
        this.setState({
          networkConnected: state.isConnected,
        });
        if (this.WEBVIEW.current) {
          if (state.isConnected) {
            this.WEBVIEW.current.reload();
            if (this.state.showDialog) {
              this.hideDialog();
            }
          } else {
            this.WEBVIEW.current.stopLoading();
            //Alert.alert('Ops! Seems you have disconnected from internet');
            this.showDialog();
          }
        }
      }
    });
  }

  componentDidMount() {
    this.hideDialog = this.hideDialog.bind(this);
    this.showDialog = this.showDialog.bind(this);
}

  onNavigationStateChange(navState) {
    navState = navState.nativeEvent;
    this.setState({
      currentUrl: navState.url,
      canGoBack: navState.canGoBack,
      canGoForward: navState.canGoForward,
    });
    console.log('current url: ',navState.url);
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
      currentUrl: this.state.homeUrl,
    });
    //this.onReload();
  }

  showDialog() {
    this.setState({showDialog: true});
  }

  hideDialog() {
    this.setState({showDialog: false});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.networkConnected ?
          <WebView
            ref={this.WEBVIEW}
            source={{uri: this.state.currentUrl}}
            style={styles.webview}
            setSupportMultipleWindows={false}
            onLoadStart={this.onNavigationStateChange.bind(this)}
          /> :
          <View style={styles.errPage}>
            <Text style={styles.errMsg}>Ops! Seems you are disconnected from internet.</Text>
          </View>
        }
        <View style={styles.topbar}>
          <View style={styles.navBtn}>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}>
              <Image style={
                this.state.canGoBack && this.state.networkConnected ?
                  styles.toolIcon :
                  styles.toolIconDisabled}
                source={require('./assets/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
            <TouchableOpacity
              disabled={!this.state.canGoForward}
              onPress={this.onForward.bind(this)}>
              <Image style={
                this.state.canGoForward && this.state.networkConnected ?
                  styles.toolIcon :
                  styles.toolIconDisabled}
                source={require('./assets/right-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
            <TouchableOpacity onPress={this.onHomePressed.bind(this)}>
            <Image style={
                this.state.networkConnected ?
                  styles.toolIcon :
                  styles.toolIconDisabled}
                source={require('./assets/home.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navBtn}>
            <TouchableOpacity onPress={this.onReload.bind(this)}>
            <Image style={
                this.state.networkConnected ?
                  styles.toolIcon :
                  styles.toolIconDisabled}
                source={require('./assets/refresh.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {},
  errPage:{
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errMsg: {
    fontSize: 30,
    padding: 30,
  },
  topbar: {
    borderTopColor: '#7d7d7d',
    borderTopWidth: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#dedede',
  },
  toolIcon: {
    height: 30,
    width: 30,
    tintColor: '#4551cc',
  },
  toolIconDisabled: {
    height: 30,
    width: 30,
    tintColor: '#b8b8b8',
  },
  navBtn: {
    flex: 1,
    alignItems: 'center',
  }
});

export default App;
