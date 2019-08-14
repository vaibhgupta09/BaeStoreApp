/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
export default class SplashScreen extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
        Actions.push('Dashboard');     
    }, 2000)
    
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
