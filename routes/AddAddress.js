/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro, Fumi } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';
const cart = require('../assets/cart-color.png');
import { Hoshi } from 'react-native-textinput-effects';
import AsyncStorage from '@react-native-community/async-storage';
var addressArray=[];
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
  CheckBox,
} from "native-base";
import URL from './Constant'

export default class AddAddress extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showMyadd: true, name: '', phone: '', pincode: '', address: '', nearest: '', state: '', city: '',addressArray:[] };
  }
  componentWillMount()
  {
    AsyncStorage.getItem("userId").then((value) => {
      this.setState({"userId": value});
      this.showAddress(value)
  })
  }
  addAddress()
  {  
    fetch(URL+'/address/addAddress', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:this.state.name,
        phone:this.state.phone,
        pincode:this.state.phone,
        address:this.state.address,
        nearestLandmark:this.state.nearest,
        state:this.state.state,
        city:this.state.city,
        type:'Home',
        def:true,
        userId:this.state.userId
        
      }),
    }).then(response => response.json())
      .then((responseJson) => {
       
        if (responseJson[0].success === true) {
          
          this.setState({ showMyadd: true })
          this.showAddress(this.state.userId);
       
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
  showAddress(value){
    addressArray=[];
  fetch(URL+'/address/'+value+'/showAddress')
  .then((response) => response.json())
  .then((responseJson) => {
    if(responseJson.length==0)
    {
      this.setState({showMyadd:false})
    }
    else{
      for (var i = 0; i < responseJson.length; i++) {
        addressArray.push(responseJson[i]) 
       }
    }
     

  this.setState({ addressArray: addressArray })
  })
  .catch((error) => {
    console.error(error);
  });
  }
  myAddress = () => {
    return (
      <View style={styles.container} >
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
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Address</Text>
            </View>
          </Left>
          <Right style={{ flex: 0.5 }}>
          </Right>



        </Header>
        <ScrollView>
          <View>

            <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
              <FlatList
                data={this.state.addressArray}
                renderItem={({ item }) =>

                  <View style={{ height: 200, width: width - 30, borderWidth: 0.5, borderColor: '#89898989', marginTop: 10 }}>
                    <View style={{ width: '100%', height: '80%', borderBottomColor: '#89898989', borderBottomWidth: 0.5 }}>
                      <Text style={{ marginTop: 15, marginLeft: 15, fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18 }}>
                        {item.name} (Default)
                          </Text>
                      <Text style={{ marginTop: 10, marginLeft: 15, fontFamily: 'OpenSans-Regular', color: '#898989', fontSize: 15 }}>
                        {item.address}
                          </Text>

                      <Text style={{ marginTop: 3, marginLeft: 15, fontFamily: 'OpenSans-Regular', color: '#898989', fontSize: 15 }}>
                        {item.city}-{item.pincode}
                          </Text>
                      <Text style={{ marginTop: 3, marginLeft: 15, fontFamily: 'OpenSans-Regular', color: '#898989', fontSize: 15 }}>
                        {item.state}
                          </Text>
                      <Row>
                        <Text style={{ marginTop: 3, marginLeft: 15, fontFamily: 'OpenSans-Regular', color: '#898989', fontSize: 15 }}>
                          Mobile :
                          </Text>
                        <Text style={{ marginTop: 3, marginLeft: 4, fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 15 }}>
                          {item.phone}
                          </Text>
                      </Row>



                    </View>
                    <View style={{ width: '100%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity onPress={() => this.setState({ showMyadd: false })} style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Edit/Change</Text>
                      </TouchableOpacity>
                      <View style={{ height: '70%', width: 1, backgroundColor: '#89898989' }} />
                      <TouchableOpacity onPress={() => this.setState({ showMyadd: false })} style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919' }}>Add New Address</Text>

                      </TouchableOpacity>
                    </View>


                  </View>

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
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#191919', textAlign: 'right' }}>₹ 4,800</Text>
                  </Right>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                  <Left>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: '#898989' }}>Bag Discount</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 15, color: 'green', textAlign: 'right' }}>- ₹ 2,400</Text>
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
                    <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 17, color: '#191919', textAlign: 'right' }}>₹ 2,400</Text>
                  </Right>
                </View>

              </View>

            </View>



          </View>
        </ScrollView>

        <Card style={{ height: 60, width: width, flexDirection: 'row' }}>
          <Left style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 18, fontFamily: 'OpenSans-Bold', color: '#191919' }}>₹2,400</Text>
            <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Regular', color: '#e4717a', marginTop: 1 }}>View Details</Text>
          </Left>
          <Right style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Actions.push('Confirmation')} style={{ width: '80%',borderRadius:5, height: 45, backgroundColor: '#e4717a', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontFamily: 'OpenSans-Regular', color: '#fff' }}>Continue</Text>
            </TouchableOpacity>
          </Right>

        </Card>
      </View>
    )
  }
  address() {
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
              <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Address</Text>
            </View>
          </Left>
          <Right style={{ flex: 0.5 }}>
          </Right>

        </Header>
        <ScrollView >
          <View >
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder={" Name*"}

            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(phone) => this.setState({ phone })}
              value={this.state.phone}
              placeholder={" Phone Number*"}
              keyboardType={"numeric"}

            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(pincode) => this.setState({ pincode })}
              value={this.state.pincode}
              placeholder={" Pincode*"}
              keyboardType={"numeric"}

            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(address) => this.setState({ address })}
              value={this.state.address}
              placeholder={" Address*"}
              multiline={true}

            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(landmark) => this.setState({ landmark })}
              value={this.state.landmark}
              placeholder={" Nearest Landmark"}

            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(state) => this.setState({ state })}
              value={this.state.state}
              placeholder={" State*"}
            />
            <TextInput
              style={{ height: 40, borderBottomColor: '#898989', borderBottomWidth: 0.5, marginLeft: 15, marginRight: 15, marginTop: 15, fontFamily: 'OpenSans-Regular' }}
              onChangeText={(city) => this.setState({ city })}
              value={this.state.city}
              placeholder={" City*"}

            />
            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 20 }}>
              <CheckBox color={'#e4717a'} checked={true} />
              <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 16, color: '#191919', marginLeft: 25 }}>Set as default</Text>
            </View>


          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => this.addAddress()} style={{ flexDirection: 'row', height: 50, width: width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e4717a' }}>
          <Text style={{ fontFamily: 'OpenSans-Regular', fontSize: 18, color: '#fff' }}>Save</Text>
        </TouchableOpacity>


      </View>

    );
  }
  render() {
    return (
      this.state.showMyadd ? this.myAddress() : this.address()
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
