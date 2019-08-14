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
const ENTRIES1 = [
    {
        image: 'https://i.imgur.com/IkSIc4G.jpg',
    },
    {
        image: 'https://i.imgur.com/59TgB81.jpg',
    },
    {
        image: 'https://i.imgur.com/2wwc3E9.jpg',
    },

];
import StepIndicator from 'react-native-step-indicator';
const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method", "Track"];
const thirdIndicatorStyles = {
    stepIndicatorSize: 10,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#e4717a',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#e4717a',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#e4717a',
    separatorUnFinishedColor: '#dedede',
    stepIndicatorFinishedColor: '#e4717a',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#898989',
    labelSize: 11,
    labelFontFamily: 'OpenSans-Regular',
    currentStepLabelColor: '#e4717a',

}
const girl1 = require('../assets/girl1.jpg');
const girl2 = require('../assets/girl2.jpg');
export default class ViewOrder extends PureComponent {

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
                            <Text style={{ fontFamily: 'OpenSans-Regular', color: '#191919', fontSize: 18, marginLeft: 10 }}>Order Details</Text>
                        </View>
                    </Left>


                </Header>
                <ScrollView>
                    <View>
                        <View style={{ width: width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ width: '30%' }}>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Placed On :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Order Id :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Price Details :</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}></Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}></Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}></Text>
                            </View>
                            <View style={{ width: '70%' }}>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#191919', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>16 Apr 2019</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, color: '#191919', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>#7478387</Text>
                                <View style={{ width: '70%', flexDirection: 'row' }}>
                                    <Left>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>MRP:</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10 }}>₹4,800</Text>
                                    </Right>
                                </View>
                                <View style={{ width: '70%', flexDirection: 'row' }}>
                                    <Left>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>Tax</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10 }}>₹325</Text>
                                    </Right>
                                </View>
                                <View style={{ width: '70%', flexDirection: 'row' }}>
                                    <Left>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>Discount</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10 }}>-₹1,200</Text>
                                    </Right>
                                </View>
                                <View style={{ width: '70%', flexDirection: 'row', borderTopColor: '#898989', borderTopWidth: 0.5, marginTop: 5 }}>
                                    <Left>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 5, marginLeft: 10 }}>Total-</Text>
                                    </Left>
                                    <Right>
                                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Bold', marginTop: 5 }}>-₹2,400</Text>
                                    </Right>
                                </View>


                            </View>

                        </View>
                        <View style={{ width: width, height: 1, backgroundColor: '#89898989', marginTop: 20, marginBottom: 10 }} />
                        <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Updates Sent to:</Text>
                        <Icon name={'mail'} style={{ marginTop: 10, marginLeft: 10, fontSize: 22, color: '#898989', marginRight: 10 }}>
                            <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>  vaibhgupta09@gmail.com</Text>
                        </Icon>

                        <Icon name={'ios-call'} style={{ marginTop: 10, marginLeft: 10, fontSize: 22, color: '#898989', marginRight: 10 }}>
                            <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>  8959291729</Text>
                        </Icon>
                        <View style={{ width: width, height: 1, backgroundColor: '#89898989', marginTop: 20, marginBottom: 10 }} />
                        <Text style={{ marginTop: 10, marginLeft: 10, color: '#898989', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Shippping Address:</Text>
                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 10, marginLeft: 10 }}>Vaibhav</Text>
                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 5, marginLeft: 10 }}>505,Shekhar Central AB Road Palasia</Text>
                        <Text style={{ fontSize: 15, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 5, marginLeft: 10 }}>Indore MP 452001</Text>
                        <View style={{ width: width, height: 1, backgroundColor: '#89898989', marginTop: 20, marginBottom: 10 }} />
                        <Text style={{ marginTop: 10, marginLeft: 10, color: '#191919', fontFamily: 'OpenSans-Regular', fontSize: 15 }}>Items in this order</Text>
                        <View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
                            <FlatList
                                data={[{ key: 'a', image: girl1 }, { key: 'b', image: girl2 }]}
                                renderItem={({ item }) =>

                                    <View style={{ height: 100, width: width - 30, marginTop: 10, marginBottom: 15 }}>

                                        <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={item.image} style={{ width: '30%', height: '80%', marginLeft: 10, resizeMode: 'contain' }} />
                                            <View style={{ height: '100%', width: '70%' }}>
                                                <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 10, marginTop: 5, marginRight: 10 }}>Beige Solid A-Line Layered Kurta</Text>

                                                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989' }}>Size |</Text>
                                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>S</Text>

                                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#898989', marginLeft: 10 }}>Qty |</Text>
                                                    <Text style={{ fontSize: 15, fontFamily: 'OpenSans-Regular', color: '#191919', marginLeft: 5 }}>1</Text>

                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                                                    <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: 'OpenSans-Bold', marginLeft: 10, marginTop: 1, color: '#191919' }}>₹1,200</Text>
                                                    <Text numberOfLines={1} style={{ textDecorationLine: 'line-through', fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#898989' }}>₹2,400</Text>
                                                    <Text numberOfLines={1} style={{ fontSize: 12, fontFamily: 'OpenSans-Regular', marginLeft: 5, marginTop: 1, color: '#e4717a' }}>50% OFF</Text>
                                                </View>
                                            </View>

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
