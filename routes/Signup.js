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
import { TextField } from 'react-native-material-textfield';
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
import Ripple from 'react-native-material-ripple';

export default class Signup extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            fullname:'',
            phone:''
        };
    }
    signup=()=>{

        fetch(URL+'/users/addUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName:this.state.fullname,
        email:this.state.email,
        phone:this.state.phone,
        password:this.state.password,
        status:true
      }),
    }).then(response => response.json())
      .then((responseJson) => {
       
        if (responseJson[0].success === true) {
          
        Actions.push("LoginScreen");
       
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
    render() {
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
                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Sign up</Text>
                        </View>
                    </Left>
                    <Right style={{ flex: 0.5 }}>
                    </Right>



                </Header>
                <View style={{ marginLeft: 30, marginRight: 30, marginTop: 40 }}>

                    <TextField
                        label='Email ID*'
                        value={this.state.email}
                        style={{ fontFamily: 'Alegreya' }}
                        tintColor={'#e4717a'}
                        labelTextStyle={{ fontFamily: 'Alegreya' }}
                        onChangeText={(email) => this.setState({ email })}
                    />


                    <TextField
                        label='Password*'
                        value={this.state.password}
                        style={{ fontFamily: 'Alegreya' }}
                        tintColor={'#e4717a'}
                        secureTextEntry={true}
                        labelTextStyle={{ fontFamily: 'Alegreya' }}
                        onChangeText={(password) => this.setState({ password })}

                    />

                    <TextField
                        label='Phone Number'
                        value={this.state.phone}
                        style={{ fontFamily: 'Alegreya' }}
                        tintColor={'#e4717a'}
                        keyboardType={'numeric'}
                        labelTextStyle={{ fontFamily: 'Alegreya' }}
                        onChangeText={(phone) => this.setState({ phone })}
                    />
                    <TextField
                        label='Full Name'
                        value={this.state.fullname}
                        style={{ fontFamily: 'Alegreya' }}
                        tintColor={'#e4717a'}
                        labelTextStyle={{ fontFamily: 'Alegreya' }}
                        onChangeText={(fullname) => this.setState({ fullname })}
                    />

                    <Ripple onPress={()=>this.signup()} rippleDuration={500} rippleColor={'#fff'} rippleOpacity={0.87} style={{ height: 45, width: '100%', backgroundColor: '#e4717a', marginTop: 40, justifyContent: 'center', alignItems: 'center' ,borderRadius:5}} >

                        <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Alegreya' }}>Create Account</Text>

                    </Ripple>
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
