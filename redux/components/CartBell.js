import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
const cart = require('../../assets/cart.png');
import { Actions } from 'react-native-router-flux';

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

export default class CartBell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement, cartCount } = this.props;

    return (

      <TouchableOpacity onPress={() => Actions.push('Cart')}>
        <ImageBackground source={cart} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
          <Animatable.View animation="bounce" style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#e4717a', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Alegreya', color: '#fff', fontSize: 12, marginBottom: 3 }}>{parseInt(cartCount) + parseInt(counter)}</Text>
          </Animatable.View>
        </ImageBackground>
      </TouchableOpacity>

    );
  }
}

