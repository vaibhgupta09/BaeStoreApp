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
const cart = require('../assets/cart-color.png');
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
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
export default class Wishlist extends PureComponent {
  render() {
    return (

      <View style={styles.container} >
        <ScrollView>
          <View>
            <StatusBar backgroundColor={'#e4717a'} />
            <Header
              style={{ backgroundColor: "#fff", borderBottomColor: '#fff', borderBottomWidth: 1 }}
              androidStatusBarColor={"#e4717a"}
            >
              <Left style={{ flex: 0.5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                  <TouchableOpacity
                    onPress={() => Actions.pop()}
                    style={{ height: 32, width: 32 }}
                  >
                    <Icon name={'ios-arrow-round-back'} style={{ marginLeft: 10, fontSize: 35, color: '#191919' }} />
                  </TouchableOpacity>
                  <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Wishlist</Text>
                </View>
              </Left>
              <Right style={{ flex: 0.5 }}>
              </Right>



            </Header>
            <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                data={[{ key: 'a', image: girl1 }, { key: 'b', image: girl2 }]}
                renderItem={({ item }) =>

                  <View style={{ height: 200, width: width - 30, borderWidth: 0.5, borderColor: '#89898989', marginTop: 10 }}>
                    <View style={{ width: '100%', height: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#89898989', borderBottomWidth: 0.5 }}>
                      <Image source={item.image} style={{ width: '30%', height: '80%', marginLeft: 10, resizeMode: 'contain' }} />
                      <View style={{ height: '100%', width: '70%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 10, marginTop: 20, marginRight: 10 }}>Beige Solid A-Line Layered Kurta</Text>
                        <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', marginLeft: 10, marginTop: 5, color: '#898989' }}>Women Clothes</Text>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                          <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', marginLeft: 10, marginTop: 1, color: '#191919' }}>₹1,200</Text>
                          <Text numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#898989' }}>₹2,400</Text>
                          <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#e4717a' }}>50% OFF</Text>
                        </View>
                      </View>

                    </View>
                    <View style={{ width: '100%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'trash'} style={{ marginRight: 10, fontSize: 22, color: '#898989' }} />
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Remove</Text>
                      </TouchableOpacity>
                      <View style={{ height: '70%', width: 1, backgroundColor: '#89898989' }} />
                      <TouchableOpacity style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={cart} style={{ marginRight: 10, width: 22, height: 22 }} />
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>


                  </View>

                }
              />


            </View>



          </View>
        </ScrollView>


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
