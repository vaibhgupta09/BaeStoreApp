/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, ScrollView, Image, ImageBackground } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro, Fumi } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');
const cartBig = require('../assets/cartbig.png');
import { connect } from 'react-redux';

import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
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
import URL from './Constant'
var cartArray = [];
export class Cart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { cartArray: [], totalMrp: 0, bagDiscount: 0 };

  }
  componentWillMount() {
    AsyncStorage.getItem("userId").then((value) => {
      this.setState({ "userId": value });
      this.showCart(value);
    })

  }
  showCart(value) {
    cartArray = [];
    var discountPrice = 0;
    fetch(URL + '/cart/' + value + '/showCart')
      .then((response) => response.json())
      .then((responseJson) => {
        for (var i = 0; i < responseJson.length; i++) {

          cartArray.push(responseJson[i])
          // discountPrice=(responseJson[i].productPrice/responseJson[i].discount)*100;
          this.setState({ totalMrp: this.state.totalMrp + responseJson[i].productPrice, bagDiscount: this.state.bagDiscount + (responseJson[i].productPrice - responseJson[i].discountedPrice) })
        }

        this.setState({ cartArray: cartArray })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeProduct(productId) {

    fetch(URL + '/cart/deleteItem', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: productId,
        userId: this.state.userId,
      }),
    }).then(response => response.json())
      .then((responseJson) => {

        this.props.decrement();
        this.showCart(this.state.userId)

      })
      .catch(error => console.log(error)) //to catch the errors if any}
  }

  render() {
    if (this.state.cartArray.length == 0) {
      return (
        <View style={styles.container} >
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
                <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Cart</Text>
              </View>
            </Left>
            <Right style={{ flex: 0.5 }}>
            </Right>



          </Header>
          <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={cartBig} style={{ height: 100, width: 100, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.View animation="bounce" style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 20, position: 'absolute', backgroundColor: '#e4717a', bottom: 10 }}>
                <Text style={{ fontFamily: 'OpenSans-Bold', color: 'white', fontSize: 18 }}>0</Text>
              </Animatable.View>
            </ImageBackground>
            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 20, marginTop: 20 }}>No item in bag....!</Text>
            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#898989', fontSize: 16, marginTop: 10, textAlign: 'center', width: '80%' }}>There is nothing in your bag.Let's add some items.</Text>

          </View>

        </View>
      )
    }
    return (

      <View style={styles.container} >
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
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Cart</Text>
            </View>
          </Left>
          <Right style={{ flex: 0.5 }}>
          </Right>



        </Header>
        <ScrollView>
          <View>
            <StatusBar backgroundColor={'#e4717a'} />

            <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                data={this.state.cartArray}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item }) =>

                  <Animatable.View animation="flipInX" style={{ height: 200, width: width - 30, borderWidth: 0.5, borderColor: '#89898989', marginTop: 10 }}>
                    <View style={{ width: '100%', height: '80%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#89898989', borderBottomWidth: 0.5 }}>
                      {/* <Image source={item.image} style={{ width: '30%', height: '80%', marginLeft: 10, resizeMode: 'contain' }} /> */}
                      <FastImage
                        style={{ width: '30%', height: '80%', marginLeft: 10 }}
                        source={{
                          uri: item.productImage,
                          headers: { Authorization: 'someAuthToken' },
                          priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                      />


                      <View style={{ height: '100%', width: '70%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 10, marginTop: 20, marginRight: 10 }}>{item.productName}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', marginLeft: 10, marginTop: 5, color: '#898989' }}>{item.productCategory}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                          <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989' }}>Size :</Text>
                          <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>{item.size}</Text>
                          <Icon style={{ marginLeft: 7, fontSize: 22, color: '#191919' }} name={'md-arrow-dropdown'} />
                          <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989', marginLeft: 10 }}>Qty :</Text>
                          <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>1</Text>
                          <Icon style={{ marginLeft: 7, fontSize: 22, color: '#191919' }} name={'md-arrow-dropdown'} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                          <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', marginLeft: 10, marginTop: 1, color: '#191919' }}>₹{item.discountedPrice}</Text>
                          <Text numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#898989' }}>₹{item.productPrice}</Text>
                          <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#e4717a' }}>50% OFF</Text>
                        </View>
                      </View>

                    </View>
                    <View style={{ width: '100%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => this.removeProduct(item.productId)} style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'trash'} style={{ marginRight: 10, fontSize: 22, color: '#898989' }} />
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Remove</Text>
                      </TouchableOpacity>
                      <View style={{ height: '70%', width: 1, backgroundColor: '#89898989' }} />
                      <TouchableOpacity style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={'heart'} style={{ marginRight: 10, fontSize: 22, color: '#e4717a' }} />
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Wishlist</Text>
                      </TouchableOpacity>
                    </View>


                  </Animatable.View>

                }
              />
              <View style={{ width: width - 30, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                <Text style={{ width: '100%', fontFamily: 'OpenSans-Regular', fontSize: 17, color: '#191919' }}>
                  Order Summary
                  </Text>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 15 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Total MRP</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919', textAlign: 'right' }}>₹ {this.state.totalMrp}</Text>
                  </Right>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Bag Discount</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: 'green', textAlign: 'right' }}>- ₹ {this.state.bagDiscount}</Text>
                  </Right>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Estimated Tax</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919', textAlign: 'right' }}>₹ 37</Text>
                  </Right>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Coupon Appied</Text>
                  </Left>
                  <Right>
                    <View style={{ height: 30, width: 120, borderColor: '#e4717a', borderWidth: 1, borderRadius: 5, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderStyle: "dashed" }}>
                      <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', color: '#e4717a' }}>WELCOME100</Text>
                    </View>
                  </Right>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Delivery Fee</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: 'green', textAlign: 'right' }}>Free</Text>
                  </Right>
                </View>
                <View style={{ marginTop: 15, marginBottom: 15, width: '100%', height: 1, backgroundColor: '#89898989' }} />
                <View style={{ width: '100%', flexDirection: 'row', marginBottom: 15 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 17, color: '#191919' }}>Total</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 17, color: '#191919', textAlign: 'right' }}>₹ {this.state.totalMrp - this.state.bagDiscount + 37}</Text>
                  </Right>
                </View>

              </View>

            </View>



          </View>
        </ScrollView>

        <Card style={{ height: 60, width: width, flexDirection: 'row' }}>
          <Left style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 18, fontFamily: 'OpenSans-Bold', color: '#191919' }}>₹{this.state.totalMrp - this.state.bagDiscount + 37}</Text>
            <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#e4717a', marginTop: 1 }}>View Details</Text>
          </Left>
          <Right style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => Actions.push('AddAddress')} style={{ width: '80%', borderRadius: 5, height: 45, backgroundColor: '#e4717a', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontFamily: 'OpenSans-Regular', color: '#fff' }}>Place Order</Text>
            </TouchableOpacity>
          </Right>

        </Card>
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
export default connect(state => ({
  state: state.counter
}),
  (dispatch) => ({
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) },
  })
)(Cart);