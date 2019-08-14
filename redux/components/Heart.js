import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
const unlike = require('../../assets/unlike.png');
const anim = require('../../assets/json/like.json');

import { Actions } from 'react-native-router-flux';
import { Icon, Toast, Container, Root } from 'native-base';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    }
 
  }
  wishlist() {
    this.setState({ isLike: !this.state.isLike });
  
  }
  
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Root>
      <TouchableOpacity onPress={() => this.wishlist()} style={{ width: 45, height: 45, justifyContent: 'center', alignItems: 'center' }}>
        {!this.state.isLike ?
          <Image source={unlike} style={{ height: 28, width: 28 }} /> :
          <LottieView source={anim} style={{ height: 45, width: 45 }} loop={false} autoPlay />
        }

      </TouchableOpacity>
      </Root>
    );
  }
}

