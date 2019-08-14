/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const image = require('../assets/menu.png');
const cart = require('../assets/cart.png');
const search = require('../assets/search.png');


import CartBell from '../redux/components/CartBell';
import Heart from '../redux/components/Heart';

import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import { SectionGrid } from 'react-native-super-grid';
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
import URL from './Constant';
var productArray=[];
import {fetchProducts} from '../redux/actions/productsActions';
class ProductList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
      productArray:[]
    }
   //this.productList();
   this.props.fetchProducts(this.props.categoryName);
  }

  productList=()=>
  {
    fetch(URL+'/inventory/'+this.props.categoryName+'/showProduct')
    .then((response) => response.json())
    .then((responseJson) => {
      for (var i = 0; i < responseJson.length; i++) {
    
      productArray.push(responseJson[i])
    }

    this.setState({ productArray: productArray })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    const { state, actions } = this.props;
    return (
      <View style={styles.container}>
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
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Clothes</Text>
            </View>
          </Left>

          <Right style={{ flex: 0.5 }}>

            <Image style={{ width: 22, height: 22, marginRight: 20 }} source={search} />

            {/* <TouchableOpacity>
              <ImageBackground source={cart} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
                <Animatable.View animation="bounce" style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#e4717a', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Alegreya', color: '#fff', fontSize: 12, marginBottom: 3 }}>2</Text>
                </Animatable.View>
              </ImageBackground>
            </TouchableOpacity> */}
             <CartBell
               counter={this.props.products.counter.count}
               cartCount={this.props.val}
                            />

          </Right>
        </Header>
        <ScrollView>
          <View>
            <Image source={{ uri: 'https://i.imgur.com/zTZ5nwl.jpg' }} style={{ width: width, height: 120, resizeMode: 'contain' }} />

            <SectionGrid
              itemDimension={150}
              itemContainerStyle={{ justifyContent: 'center', alignItems: 'center', borderColor: '#898989', borderWidth: 0.5 }}
              sections={[
                {
                  title: 'Numbers',
                  data: this.props.products.productlist.productArray
                }
                ,
              ]}
              renderItem={({ item }) => (
                <View >
                 <TouchableOpacity onPress={() => Actions.push('ProductDetail',{product:item,productId:item.productId,val:this.props.val})}>
                  <Animatable.Image animation={"zoomIn"} source={{ uri: item.productImage }} style={{ resizeMode: 'contain', marginTop: 10, width: width / 2, height: 200 }} />
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 15, marginRight: 15 }}>
                    <Left>
                      <Text numberOfLines={1} style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', width: width / 3, color: '#191919' }}>{item.productName}</Text>
                    </Left>
                    <Right>
                      <Heart />
                    </Right>

                  </View>
                  <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Regular', width: width / 3, marginLeft: 15, marginTop: 1, color: '#898989' }}>{item.category}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>

                    <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', marginLeft: 15, marginTop: 1, color: '#191919' }}>₹{item.discountedPrice}</Text>
                    <Text numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#898989' }}>₹{item.productPrice}</Text>
                    <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#e4717a' }}>50% OFF</Text>
                  </View>



                </View>)}

            />
          </View>
        </ScrollView>
        <View style={{ width: width, height: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#898989', borderWidth: 0.3 }}>

          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: width / 2, flexDirection: 'row' }}>
            <Icon name='ios-swap' style={{ fontSize: 20, color: '#191919', marginRight: 10 }} />
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>SORT</Text>
          </TouchableOpacity>
          <View style={{ width: 0.7, height: 25, backgroundColor: '#898989' }} />
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: width / 2, flexDirection: 'row' }}>
            <Icon name='md-funnel' style={{ fontSize: 20, color: '#191919', marginRight: 10 }} />
            <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>FILTERS</Text>
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


const mapStateToProps = state => {
  return {
    products: state,
 
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);