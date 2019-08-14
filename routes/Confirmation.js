/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, ScrollView, Image } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro, Fumi } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const confirm = require('../assets/confirm.png');
import Carousel from 'react-native-snap-carousel';
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
const anim = require('../assets/json/confirm.json');

import {
  Container,
  Header,
  Content,
  Card,
  Textarea,
  Form,
  Left,
  ScrollableTab,
  Body,
  Right,
  Tab, Tabs,
  Icon,
  Row,
  Toast,
  Button,
  Title,
} from "native-base";
const ENTRIES1 = [
  {
    image: 'https://i.imgur.com/59TgB81.jpg',
  },
  {
    image: 'https://i.imgur.com/2wwc3E9.jpg',
  },
  {
    image: 'https://i.imgur.com/59TgB81.jpg',
  },

];
export default class Confirmation extends PureComponent {
  _renderItem({ item, index }) {
    return (
      <TouchableOpacity style={{ height: 80 }}>
      
        <FastImage
               style={{  marginTop: 20, width: width / 4, height: 80 }}
                  source={{
                       uri: item.image,
                       headers: { Authorization: 'someAuthToken' },
                     priority: FastImage.priority.high,
                                              }}
                      resizeMode={FastImage.resizeMode.contain}
                       />
        <Text numberOfLines={1} style={{ fontSize: 14, marginTop: 5, fontFamily: 'OpenSans-Regular', color: '#191919', textAlign: 'center' }}>Pink Kurta</Text>

      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#e4717a'} />
        <Header
          style={{ backgroundColor: "#fff", borderBottomColor: '#fff', borderBottomWidth: 1 }}
          androidStatusBarColor={"#e4717a"}
        >
          <Left style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => Actions.push('Home')}
                style={{ height: 32, width: 32 }}
              >
                <Icon name={'close'} style={{ marginLeft: 10, fontSize: 25, color: '#191919' }} />
              </TouchableOpacity>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Order Confirmation</Text>
            </View>
          </Left>


        </Header>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 400, width: width - 30, borderWidth: 0.5, borderColor: '#89898989', marginTop: 10 }}>
            <View style={{ width: '100%', height: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#89898989', borderBottomWidth: 0.5 }}>

              <View style={{ height: '100%', width: '70%', justifyContent: 'center', alignItems: 'center' }}>
              <LottieView source={anim} style={{ height: 100, width: 100,marginTop:10,marginBottom:10 }} loop autoPlay />
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#191919', marginTop: 10 }}>Order Confirmed</Text>
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 12, color: '#898989', marginTop: 10, textAlign: 'center' }}>You will receive an order confirmation email shortly with the expected delivery date.</Text>
           
                <Carousel
                  ref={(c) => { this._carousel = c; }}
                  data={ENTRIES1}
                  firstItem={1}
                  renderItem={this._renderItem}
                  sliderWidth={width - 44}
                  itemWidth={width / 4}
                />

              </View>

            </View>
            <View style={{ width: '100%', height: '10%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => Actions.push("Orders")}
                style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'ios-bus'} style={{ marginRight: 10, fontSize: 22, color: '#e4717a' }} />
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Track Order</Text>
              </TouchableOpacity>
              <View style={{ height: '70%', width: 1, backgroundColor: '#89898989' }} />
              <TouchableOpacity onPress={() => Actions.push("ViewOrder")}
                style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'md-paper'} style={{ marginRight: 10, fontSize: 22, color: '#e4717a' }} />
                <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>View Order</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => Actions.push('Home')} style={{ height: 45, borderRadius:5, width: 200, backgroundColor: '#e4717a', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#fff' }}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
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
