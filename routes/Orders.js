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
import FastImage from 'react-native-fast-image'
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
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');

import StepIndicator from 'react-native-step-indicator';
const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const thirdIndicatorStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 20,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#e4717a',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#e4717a',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#e4717a',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#e4717a',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#898989',
  labelSize: 11,
  labelFontFamily: 'OpenSans-Regular',
  currentStepLabelColor: '#e4717a',

}
import * as Animatable from 'react-native-animatable';

export default class Orders extends PureComponent {

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
                onPress={() => Actions.pop()}
                style={{ height: 32, width: 32 }}
              >
                <Icon name={'close'} style={{ marginLeft: 10, fontSize: 25, color: '#191919' }} />
              </TouchableOpacity>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Orders</Text>
            </View>
          </Left>


        </Header>

        <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={[{ key: 'a', image: 'https://i.imgur.com/59TgB81.jpg' }, { key: 'b', image: 'https://i.imgur.com/2wwc3E9.jpg' }]}
            renderItem={({ item }) =>
            <Animatable.View animation="flipInX">
              <TouchableOpacity onPress={() => Actions.push('ViewOrder')} style={{ height: 200, width: width - 30, borderWidth: 0.5, borderColor: '#89898989', marginTop: 10 }}>
                <View style={{ height: '15%', alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 13, color: '#898989', marginLeft: 10 }}>
                    Order Id-</Text>
                  <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 13, color: '#191919', marginLeft: 10 }}>
                    #4542144</Text>
                </View>
                <View style={{ width: '100%', height: '55%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#89898989', borderBottomWidth: 0.5, borderTopColor: '#89898989', borderTopWidth: 0.5 }}>
                  {/* <Image source={item.image} style={{ width: '30%', height: '80%', marginLeft: 10, resizeMode: 'contain' }} /> */}
                  <FastImage
                    style={{ width: '30%', height: '80%', marginLeft: 10 }}
                    source={{
                      uri: item.image,
                      headers: { Authorization: 'someAuthToken' },
                      priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                  />

                  <View style={{ height: '100%', width: '70%' }}>
                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 10, marginTop: 10, marginRight: 10 }}>Beige Solid A-Line Layered Kurta</Text>

                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989' }}>Size |</Text>
                      <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>S</Text>

                      <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989', marginLeft: 10 }}>Qty |</Text>
                      <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>1</Text>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                      <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', marginLeft: 10, marginTop: 1, color: '#191919' }}>₹1,200</Text>
                      <Text numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#898989' }}>₹2,400</Text>
                      <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#e4717a' }}>50% OFF</Text>
                    </View>
                  </View>

                </View>
                <View style={{ height: '30%', justifyContent: 'center' }}>
                  <StepIndicator
                    stepCount={4}
                    customStyles={thirdIndicatorStyles}
                    currentPosition={2}

                    // onPress={this.onStepPress}
                    labels={['Approval', 'Processing', 'Shipping', 'Delivery']}
                  />
                </View>

              </TouchableOpacity>
              </Animatable.View>
            }
          />


        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
