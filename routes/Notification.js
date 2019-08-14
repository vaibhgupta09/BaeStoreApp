/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, FlatList, Dimensions, ScrollView, Image } from 'react-native';
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
export default class Notification extends PureComponent {
    render() {
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
                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Notifications</Text>
                        </View>
                    </Left>
                    <Right style={{ flex: 0.5 }}>
                    </Right>
                </Header>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name={'md-notifications-outline'} style={{ marginLeft: 10, fontSize: 70, color: '#e4717a',marginBottom:20 }} />
                <Text style={{fontSize:18,color:'#898989',fontFamily:'OpenSans-Regular'}}>No Notifications</Text>
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
