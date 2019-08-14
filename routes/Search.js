/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ActivityIndicator, TextInput, FlatList, Dimensions, ScrollView, Image } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro, Fumi } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
const cart = require('../assets/cart-color.png');
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');
const search = require('../assets/search.png');
const shoes = require('../assets/shoes.png');
const makeup = require('../assets/makeup.png');
const glass = require('../assets/glass.png');
const bag = require('../assets/bag.png');
const dress = require('../assets/dress.png');
import * as Animatable from 'react-native-animatable';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import Voice from 'react-native-voice';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import LottieView from 'lottie-react-native';
const anim = require('../assets/json/voice.json');

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
export default class Search extends PureComponent {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
    searchText: '',
    isVoice: true,
    visible: false,
    recognizedText:'Listening..'
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = e => {
    // eslint-disable-next-line
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    // eslint-disable-next-line
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    // eslint-disable-next-line
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
      isVoice: true,
      searchText: "" + e.value,
      recognizedText:""+e.value,
      visible:false
    });
  };

  onSpeechVolumeChanged = e => {
    // eslint-disable-next-line
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
      isVoice: false,
      recognizedText:'Listening..'
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };
 startListening =()=>{
  this.setState({visible:true})
  this._startRecognizing();
 }
  render() {
    return (

      <View style={styles.container} >
        <StatusBar backgroundColor={'#e4717a'} />
        <Header
          style={{ backgroundColor: "#fff", borderBottomColor: '#fff', borderBottomWidth: 1 }}
          androidStatusBarColor={"#e4717a"}
        >
          <Left style={{ flex: 0.2 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <TouchableOpacity
                onPress={() => Actions.pop()}
                style={{ height: 32, width: 32 }}
              >
                <Icon name={'ios-arrow-round-back'} style={{ marginLeft: 10, fontSize: 35, color: '#191919' }} />
              </TouchableOpacity>

            </View>
          </Left>
          <Body style={{ flex: 0.6 }}>
            <TextInput
              style={{ height: '100%', width: "100%", fontSize: 18, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(searchText) => this.setState({ searchText })}
              placeholder={'Search here'}
              autoFocus={true}
              value={this.state.searchText}

            />
          </Body>

          <Right style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
          
              <TouchableOpacity
                onPress={()=>this.startListening()}
              >
                <Icon name={'md-mic'} style={{ marginLeft: 10, fontSize: 22, color: '#191919' }} />
              </TouchableOpacity>
           

          </Right>

        </Header>
        <View style={{ height: 100, backgroundColor: '#e4717a', justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={[{ key: 'a', title: 'Footwears', image: shoes }, { key: 'b', title: 'Makeup', image: makeup }, { key: 'c', title: 'Bags', image: bag }, { key: 'd', title: 'Sunglasses', image: glass }, { key: 'e', title: 'Clothes', image: dress }]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => Actions.push('ProductList')} style={{ marginTop: 15, marginLeft: 7, marginRight: 7 }}>
                <Animatable.View animation="fadeInLeft" style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 35 }}>
                  <Image source={item.image} style={{ height: 22, width: 22 }} />
                </Animatable.View>
                <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff', fontFamily: 'OpenSans-Regular', marginTop: 5 }}>{item.title}</Text>

              </TouchableOpacity>
            }
          />
        </View>
        <ScrollView>
          <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: width, height: 50, backgroundColor: '#f9f5ed', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 14, color: '#898989' }}>Popular Searches</Text>
            </View>
            <FlatList
              data={[{ key: 'a', title: 'Footwears', image: shoes }, { key: 'b', title: 'Makeup', image: makeup }, { key: 'c', title: 'Bags', image: bag }, { key: 'd', title: 'Sunglasses', image: glass }, { key: 'e', title: 'Clothes', image: dress }]}
              renderItem={({ item }) =>
                <TouchableOpacity style={{ width: width - 30, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                  <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#191919' }}>{item.title}</Text>
                </TouchableOpacity>
              }
            />
          </View>
        </ScrollView>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <View style={{ width: width / 1.2, height: 250, justifyContent: 'center', alignItems: 'center' }}>
              <LottieView source={anim} style={{ height: 150, width: 150 }} loop={true} autoPlay />
              <Text style={{ marginTop: 15, fontSize: 20, color: '#191919' }}>{this.state.recognizedText}</Text>
            </View>
          </DialogContent>
        </Dialog>

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
