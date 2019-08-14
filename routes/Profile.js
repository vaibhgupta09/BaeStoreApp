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
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

export default class Profile extends PureComponent {

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
                <Icon name={'ios-arrow-round-back'} style={{ marginLeft: 10, fontSize: 35, color: '#191919' }} />
              </TouchableOpacity>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Profile</Text>
            </View>
          </Left>


        </Header>
        <View style={{ width: width, height: height / 3.8, alignItems: 'center' }}>
          <View style={{ width: width, height: '80%', backgroundColor: '#f9f5ed' }} />
          <Image
            style={{ height: 80, width: 80, borderRadius: 40, position: 'absolute', bottom: '10%' }}
            source={{ uri }}
          />

        </View>
        <TypeWriter typing={1} style={{ fontSize: 28, fontFamily: 'Rochester', color: '#191919', textAlign: 'center', }}>Vaibhav</TypeWriter>
        <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity style={{ width: '80%', borderColor: '#89898989', borderWidth: 0.5, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center' }}>
            <Left>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15, marginLeft: 10 }}>Personal Info</Text>
            </Left>
            <Right>
              <Icon name={'ios-arrow-forward'} style={{ color: '#191919', fontSize: 22, marginRight: 10 }} />
            </Right>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '80%', borderColor: '#89898989', borderWidth: 0.5, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Left>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15, marginLeft: 10 }}>Saved Cards</Text>
            </Left>
            <Right>
              <Icon name={'ios-arrow-forward'} style={{ color: '#191919', fontSize: 22, marginRight: 10 }} />
            </Right>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '80%', borderColor: '#89898989', borderWidth: 0.5, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Left>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15, marginLeft: 10 }}>Bank Details</Text>
            </Left>
            <Right>
              <Icon name={'ios-arrow-forward'} style={{ color: '#191919', fontSize: 22, marginRight: 10 }} />
            </Right>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '80%', borderColor: '#89898989', borderWidth: 0.5, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Left>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15, marginLeft: 10 }}>Coupons</Text>
            </Left>
            <Right>
              <Icon name={'ios-arrow-forward'} style={{ color: '#191919', fontSize: 22, marginRight: 10 }} />
            </Right>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '80%', borderColor: '#89898989', borderWidth: 0.5, flexDirection: 'row', height: 45, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Left>
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15, marginLeft: 10 }}>Share app</Text>
            </Left>
            <Right>
              <Icon name={'ios-arrow-forward'} style={{ color: '#191919', fontSize: 22, marginRight: 10 }} />
            </Right>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.push('LoginScreen')}>
            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#e4717a', fontSize: 15, marginTop: 15 }}>Logout</Text>
          </TouchableOpacity>

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
