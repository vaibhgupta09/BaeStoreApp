/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image, ImageBackground, FlatList } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { Jiro, Fumi } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
const {
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
import ParallaxScrollView from 'react-native-parallax-scroll-view';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const cart = require('../assets/cart.png');
const cartwhite = require('../assets/cart-white.png');
import FastImage from 'react-native-fast-image'
import CartBell from '../redux/components/CartBell';
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
const search = require('../assets/search.png');
import * as Animatable from 'react-native-animatable';
import URL from './Constant'

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
import Slideshow from 'react-native-slideshow';
var act ='';
class ProductDetail extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { open: true, sizeSelected: 'S', anim: 'bounce', cartText: 'Add to cart'};
    this.checkProduct();
  }
  componentWillMount(){
    this.setState(this.props.product)
    AsyncStorage.getItem("userId").then((value) => {
      this.setState({ userId: value });
    })
     
  }
 
  goTo(){
  
    this.setState({ anim: 'bounceIn', cartText: 'Goto cart' });
    if (this.props.state.cartText == 'Goto cart') {
      Actions.push('Cart')
     
    }
    else{
     this.addToCart();
     this.props.increment();
    }
  }
  checkProduct()
  { 
    fetch(URL+'/cart/5hqQtPO21/'+this.props.productId+'/InsideCart')
    .then((response) => response.json())
    .then((responseJson) => {
    if(responseJson.success===true)
    {
      this.props.changetext();
    }
    else
    {
      this.props.changetext1();
    }

    
    })
    .catch((error) => {
      console.error(error);
    });
  }
  addToCart()
  { 
    fetch(URL+'/cart/addtoCart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId:this.state.userId,
        productId:this.state.productId,
        productName:this.state.productName,
        productCategory:this.state.category,
        productImage:this.state.productImage,
        productPrice:this.state.productPrice,
        discount:this.state.discount,
        discountedPrice:this.state.discountedPrice,
        size:this.state.sizeSelected,
        quantity:1,
        inStock:this.state.inStock
      }),
    }).then(response => response.json())
      .then((responseJson) => {
        
        if (responseJson[0].success === true) {
          
        }
        else {
          Toast.show({
            text: responseJson.msg,
            buttonText: "Okay",
            type: "danger"
          });
        }
      })
      .catch(error => console.log(error)) //to catch the errors if any}
  }

  _renderHeader() {
    return (
      <TouchableOpacity onPress={() => this.setState({ open: !this.state.open })} style={{ marginLeft: 15, marginTop: 10, marginRight: 15, flexDirection: 'row' }}>
        <Left>
          <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Availble Offers</Text>
        </Left>
        <Right>
          <TouchableOpacity onPress={() => this.setState({ open: !this.state.open })}>
            <Icon name={this.state.open ? 'ios-arrow-up' : 'ios-arrow-down'} style={{ fontSize: 25, color: '#191919' }} />
          </TouchableOpacity>

        </Right>
      </TouchableOpacity>
    );
  };

  _renderContent() {
    return (
      <TouchableOpacity style={{ marginLeft: 15, marginTop: 15, marginRight: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Coupon Code :</Text>
          <View style={{ height: 35, width: 150, borderColor: '#e4717a', borderWidth: 1, borderRadius: 5, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderStyle: "dashed" }}>
            <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', color: '#e4717a' }}>WELCOME100</Text>
          </View>
        </View>
        <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#898989', marginTop: 10 }}>Appicable on: Orders above Rs.599 (Only on first purchase) Coupon discount : Rs.401, excluding tax (check cart for final savings) </Text>

      </TouchableOpacity>
    );
  };

  render() {
  
   act  = this.props;
const {state,actions}=this.props;
    return (

      <View style={styles.container}>
        <StatusBar backgroundColor={'#e4717a'} />
        <ParallaxScrollView
          backgroundColor="#f9f5ed"
          contentBackgroundColor="white"
          stickyHeaderHeight={HEADER_HEIGHT}
          parallaxHeaderHeight={height / 1.5}
          renderStickyHeader={() => (
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

                </View>
              </Left>


              <Right style={{ flex: 0.5 }}>

                <Icon name={'heart'} style={{ fontSize: 30, color: '#e4717a', marginRight: 15 }} />

                <CartBell
               counter={state.count}
               cartCount={this.props.val}
                       />

              </Right>
            </Header>
          )}
          renderForeground={() => (
            <View style={{ height: height / 1.2, width: width, marginTop: STATUS_BAR_HEIGHT }}>
              {/* <Image source={{ uri: 'https://i.imgur.com/59TgB81.jpg' }} style={{ marginTop: 10, width: width, height: height / 1.2, marginBottom: 10 }} /> */}
              <Slideshow

                height={height / 1.2}
                dataSource={this.state.images} />
               <CartBell
               counter={state.count}
                       />
              <Icon style={{
                position: 'absolute', right: 20, marginTop: 10, color
                  : '#191919'
              }} name={'md-more'} />
              {/* <TouchableOpacity
                    onPress={() => Actions.pop()}
                    style={{ position:'absolute',left:20,height: 32, width: 32 }}
                  >
                    <Icon style={{marginTop:10,fontSize:35,
          color:'#191919'}} name={'ios-arrow-round-back'}/>
                  </TouchableOpacity> */}

            </View>
          )}>
          <View style={{}}>
            <View style={{ flexDirection: 'row' }}>

              <Animatable.Text animation="slideInUp" style={{ fontSize: 20, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 15, marginTop: 15,marginRight:15 }}>{this.state.productName}</Animatable.Text>


            </View>
            <Animatable.Text animation="slideInUp" numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', marginLeft: 15, marginTop: 1, color: '#898989', marginTop: 5 }}>{this.state.category}</Animatable.Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>

              <Animatable.Text animation="slideInUp" numberOfLines={1} style={{ fontSize: 20, fontFamily: 'OpenSans-Bold', marginLeft: 15, color: '#191919' }}>₹{this.state.discountedPrice}</Animatable.Text>
              <Animatable.Text animation="slideInUp" numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 15, fontFamily: 'OpenSans-Regular', marginLeft: 7, color: '#898989' }}>₹{this.state.productPrice}</Animatable.Text>
              <Animatable.Text animation="slideInUp" numberOfLines={1} style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', marginLeft: 7, color: '#e4717a' }}>(50% OFF)</Animatable.Text>
            </View>
            <Animatable.Text animation="slideInUp" numberOfLines={1} style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', marginLeft: 15, marginRight: 15, marginTop: 1, color: '#B8B8B8', marginTop: 5 }}>Addition Tax ,if appicable,will be charged at checkout.</Animatable.Text>

            <View style={{ width: width, marginTop: 15 }}>
              <View style={{ height: 0.5, backgroundColor: '#B8B8B8', marginLeft: 15, marginRight: 15 }} />
            </View>
            {this._renderHeader()}
            {this.state.open ? this._renderContent() : null}
            <View style={{ height: 15, width: width, marginTop: 20, marginBottom: 20, backgroundColor: '#f9f5ed' }} />

            <View style={{ width: width }}>
              <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row' }}>
                <Left>
                  <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Select Size</Text>
                </Left>
                <Right>
                  <Text numberOfLines={1} style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#e4717a' }}>Size Chart</Text>
                </Right>
              </View>
              <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', marginTop: 20 }}>
                <FlatList
                  data={this.state.size}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  extraData={this.state}
                  renderItem={({ item }) =>


                    <TouchableOpacity onPress={() => this.setState({ sizeSelected: item.key,size:this.state.size })} style={this.state.sizeSelected === item.key ? styles.sizeSelected : styles.sizeNot}>
                      <Text numberOfLines={1} style={this.state.sizeSelected === item.key ? styles.textColor : styles.textBlack}>{item.key}</Text>
                    </TouchableOpacity>


                  }
                />
              </View>

              <View style={{ height: 0.5, backgroundColor: '#B8B8B8', marginLeft: 15, marginRight: 15, marginTop: 20, marginBottom: 15 }} />
              <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#898989', marginLeft: 15 }}>Dimensions</Text>
              <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 15, marginTop: 5 }}>This Model has height 5'7",Bust 34",Waist 26",Hips 34" and wearing size S.</Text>


            </View>
            <View style={{ height: 15, width: width, marginTop: 20, marginBottom: 20, backgroundColor: '#f9f5ed' }} />
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Product Description</Text>
              <Text numberOfLines={1} style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#898989', marginTop: 20 }}> Description</Text>
              <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#191919', marginTop: 10 }}>{this.state.productDescription}</Text>
             


            </View>
            <View style={{ height: 15, width: width, marginTop: 20, marginBottom: 20, backgroundColor: '#f9f5ed' }} />
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Sold by</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#e4717a', marginTop: 20 }}>Proleague</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#191919', marginTop: 15 }}>Manufacturer Detail</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#898989', marginTop: 5 }}>Mayra fashion Impex 23/343,Ring Road,Agra -282003</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#191919', marginTop: 10 }}>Country of Origin</Text>
              <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', color: '#898989', marginTop: 5 }}>India</Text>
            </View>
            <View style={{ height: 15, width: width, marginTop: 20, marginBottom: 20, backgroundColor: '#f9f5ed' }} />
            <View style={{ marginLeft: 15, marginBottom: 15 }}>
              <Text numberOfLines={1} style={{ fontSize: 16, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Recommended Product</Text>
              <FlatList
                data={[{ key: 'a', image: 'https://i.imgur.com/59TgB81.jpg', }, { key: 'b', image: 'https://i.imgur.com/IkSIc4G.jpg' }, { key: 'c', image: 'https://i.imgur.com/K6VSWWI.jpg' }, { key: 'd', image: 'https://i.imgur.com/59TgB81.jpg' }, { key: 'e', image: 'https://i.imgur.com/K6VSWWI.jpg' }]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                  <View style={{ marginLeft: 10 }}>
                    {/* <Image source={{ uri: item.image }} style={{ resizeMode: 'contain', marginTop: 10, width: width / 3, height: 170 }} /> */}
                    <FastImage
                        style={{ marginTop: 10, width: width / 3, height: 170 }}
                            source={{
                                 uri: item.image,
                                headers: { Authorization: 'someAuthToken' },
                                 priority: FastImage.priority.high,
                                              }}
                             resizeMode={FastImage.resizeMode.contain}
                                                />
                    <Text numberOfLines={1} style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919' }}>Layered Kurta</Text>
                  </View>

                }
              />
            </View>


          </View>
        </ParallaxScrollView>
        <View style={{ width: width, height: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#898989', borderWidth: 0.3 }}>

          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: width / 2, flexDirection: 'row' }}>
            <Icon name={'heart'} style={{ fontSize: 30, color: '#e4717a', marginRight: 10 }} />
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Add to wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.goTo()} style={{ justifyContent: 'center', backgroundColor: '#e4717a', alignItems: 'center', width: width / 2, flexDirection: 'row', height: 50 }}>
            <Image source={cartwhite} style={{ height: 28, width: 28, marginRight: 10 }} />
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#fff' }}>{this.props.state.cartText}</Text>
          </TouchableOpacity>

        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  textBlack: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: '#898989',
  },
  textColor: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#e4717a',
  },
  sizeSelected: {
    height: 60, width: 60,
    backgroundColor: '#f9f5ed',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4717a'
  },
  sizeNot: {
    height: 60,
    width: 60,
    backgroundColor: '#f9f5ed',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default connect(state => ({
  state: state.counter

}),
(dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  changetext: () => { dispatch({ type: 'CHANGETEXT' }) },
  changetext1: () => { dispatch({ type: 'CHANGETEXT1' }) },
})
)(ProductDetail);