/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity,Image } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Jiro, Fumi,Hideo } from 'react-native-textinput-effects';
import { Button } from 'native-base'
import { Actions } from 'react-native-router-flux';
import Ripple from 'react-native-material-ripple';
import { TextField } from 'react-native-material-textfield';
import Icon from 'native-base';
const bag = require('../assets/accessory.png');
import URL from './Constant'
import AsyncStorage from '@react-native-community/async-storage';
export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
}

  login=()=>{

    fetch(URL+'/users/signIn', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email:this.state.email,
    password:this.state.password,
  }),
}).then(response => response.json())
  .then((responseJson) => {
   
    if (responseJson[0].success === true) {
 
      AsyncStorage.setItem('userId',responseJson[0].userId);
      AsyncStorage.setItem('userName', responseJson[0].userName);
      AsyncStorage.setItem('email', responseJson[0].email);
      AsyncStorage.setItem('phone', responseJson[0].phone);
      AsyncStorage.setItem('createdDate',responseJson[0].createdDate);
      Actions.push("Home");
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
      <View style={styles.container}>
        <StatusBar backgroundColor={'#e4717a'} />
 
        <TypeWriter typing={1} style={{ fontSize: 45, fontFamily: 'Rochester', color: '#191919', textAlign: 'center' }}>Bae Store</TypeWriter>

        <View style={{ marginLeft: 30, marginRight: 30, marginTop: 40 }}>
     
        <TextField
        label='Email ID/Mobile Number*'
        value={this.state.email}
        style={{fontFamily:'Alegreya'}}
        tintColor={'#e4717a'}
        labelTextStyle={{fontFamily:'Alegreya'}}
        onChangeText={ (email) => this.setState({ email }) }
      />
       
        
      <TextField
        label='Password*'
        value={this.state.password}
        style={{fontFamily:'Alegreya'}}
        tintColor={'#e4717a'}
        secureTextEntry={true}
        labelTextStyle={{fontFamily:'Alegreya'}}
        onChangeText={ (password) => this.setState({ password }) }
      
      / >
    
        


          <Ripple rippleDuration={500} rippleColor={'#fff'} rippleOpacity={0.87} onPress={() => this.login()} style={{ height: 45, width: '100%', backgroundColor: '#e4717a', marginTop: 35, borderRadius:5,justifyContent: 'center', alignItems: 'center' }} >

            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Alegreya' }}>LOGIN</Text>

          </Ripple>

          <View style={{ width: '100%', flexDirection: 'row', marginTop: 15, marginBottom: 15, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 0.5, backgroundColor: 'black', width: '40%' }} />
            <Text style={{ fontSize: 17, fontFamily: 'Alegreya' }}>  or  </Text>
            <View style={{ height: 0.5, backgroundColor: 'black', width: '40%' }} />
          </View>
          <Ripple rippleDuration={500} rippleColor={'#fff'} rippleOpacity={0.87} style={{ height: 45, width: '100%', backgroundColor: '#3b5998', justifyContent: 'center', alignItems: 'center', borderRadius:5 }} >
            <Text style={{ fontSize: 17, color: 'white', fontFamily: 'Alegreya' }}>Facebook Login</Text>
          </Ripple>
          <View style={{ width: '100%', flexDirection: 'row', marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, color: '#191919', fontFamily: 'Alegreya' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>Actions.push('Signup')}>
              <Text style={{ fontSize: 17, color: '#e4717a', fontFamily: 'Alegreya' }}> Sign up</Text>
            </TouchableOpacity>
          </View>

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
