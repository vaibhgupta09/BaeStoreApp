import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    
    ImageBackground,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const image = require('../assets/menu.png');
const cart = require('../assets/cart.png');
const search = require('../assets/search.png');
const shoes = require('../assets/shoes.png');
const makeup = require('../assets/makeup.png');
const glass = require('../assets/glass.png');
const bag = require('../assets/bag.png');
const dress = require('../assets/dress.png');
const notification = require('../assets/notification.png');
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import CartBell from '../redux/components/CartBell';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
 let val=0;
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
import TypeWriter from 'react-native-typewriter';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import URL from './Constant';
import helpers from './helper';

const anim = require('../assets/json/loader.json');
const ENTRIES1 = [
    {
        image: 'https://i.imgur.com/CqfTPZG.jpg',

    },
    {
        image: 'https://i.imgur.com/5e0Se4I.jpg',

    },
    {
        image: 'https://i.imgur.com/PUUBeVP.jpg',

    },
    {
        image: 'https://i.imgur.com/5e0Se4I.jpg',


    },
    {
        image: 'https://i.imgur.com/8p4fmRM.jpg',

    },
    {
        image: 'https://i.imgur.com/PUUBeVP.jpg',

    }
];
class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            selectedItem: 'About',
            loading: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }
   componentWillMount(){
    AsyncStorage.getItem("userId").then((value) => {
        this.setState({"userId": value});
        this.cartCount(value)
    })
  
   }
   cartCount(value){
    fetch(URL+'/cart/'+value+'/itemsCount')
    .then((response) => response.json())
    .then((responseJson) => {
       // helpers.helper2(responseJson);
        val=responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
   }
    componentDidMount() {

        setTimeout(() => {
            this.setState({ loading: false })

        }, 1000)
    }

    onMenuItemSelected = item =>
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    _renderItem({ item, index }) {
        return (
            <TouchableOpacity onPress={() => Actions.push('ProductList')} style={styles.slide}>
                
                <Image
                    style={{ height: 300, width: 200 }}
                    source={{ uri: item.image }}
                />

            </TouchableOpacity>
        );
    }
    render() {
 
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <LottieView source={anim} style={{ height: 100, width: 100, marginTop: 10, marginBottom: 10 }} loop autoPlay />

                </View>
            )
        }
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        const { state, actions } = this.props;
        return (



            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}
            >

                <View style={styles.container}>
                    <Header
                        style={{ backgroundColor: "#fff", borderBottomColor: '#fff', borderBottomWidth: 1 }}
                        androidStatusBarColor={"#e4717a"}
                    >
                        <Left style={{ flex: 0.5 }}>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity
                                    onPress={this.toggle}
                                    style={{ height: 32, width: 32 }}
                                >
                                    <Image
                                        source={image}
                                        style={{ width: 28, height: 28 }}
                                    />
                                </TouchableOpacity>
                                <TypeWriter typing={1} style={{ fontSize: 28, fontFamily: 'Rochester', color: '#191919', textAlign: 'center', marginLeft: 25 }}>Bae Store</TypeWriter>
                            </View>
                        </Left>


                        <Right style={{ flex: 0.5 }}>
                            <TouchableOpacity onPress={() => Actions.push('Search')}>
                                <Image style={{ width: 22, height: 22, marginRight: 20 }} source={search} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.push('Notification')}>
                                <Image style={{ width: 24, height: 24, marginRight: 20 }} source={notification} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => Actions.push('Cart')}>
                                <ImageBackground source={cart} style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
                                    <Animatable.View animation="bounce" style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#e4717a', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontFamily: 'Alegreya', color: '#fff', fontSize: 12, marginBottom: 3 }}>2</Text>
                                    </Animatable.View>
                                </ImageBackground>
                            </TouchableOpacity> */}
                            <CartBell
                               cartCount={val}
                                counter={state.count}
                            />

                        </Right>
                    </Header>
                    <ScrollView>
                        <View>
                            <View style={{ height: 120 }}>
                                <FlatList
                                    data={[{ key: 'a', title: 'Footwears', image: shoes }, { key: 'b', title: 'Makeup', image: makeup }, { key: 'c', title: 'Bags', image: bag }, { key: 'd', title: 'Sunglasses', image: glass }, { key: 'e', title: 'Clothes', image: dress }]}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}

                                    renderItem={({ item }) =>
                                        <TouchableOpacity onPress={() => Actions.push('ProductList', { categoryName: item.title,val:val})} style={{ marginLeft: 15, marginTop: 15 }}>
                                            <Animatable.View animation="fadeInLeft" style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f5ed', borderRadius: 35 }}>
                                                <Image source={item.image} style={{ height: 32, width: 32 }} />
                                            </Animatable.View>
                                            <Text style={{ textAlign: 'center', fontSize: 12, color: '#191919', fontFamily: 'OpenSans-Regular', marginTop: 5 }}>{item.title}</Text>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                            <View style={{ height: 15 }} />
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#191919', fontFamily: 'Alegreya' }}>Trending Now</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12, color: '#191919', marginBottom: 25, fontFamily: 'Alegreya' }}>From the runyway to your wardrobe</Text>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={ENTRIES1}
                                firstItem={3}
                                renderItem={this._renderItem}
                                sliderWidth={width}
                                itemWidth={200}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#191919', marginTop: 15, fontFamily: 'Alegreya' }}>Styles to Steal</Text>
                            <Text style={{ textAlign: 'center', fontSize: 12, color: '#191919', marginBottom: 25, fontFamily: 'Alegreya' }}>Inspired by influencers</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: width }}>
                                <FlatList
                                    data={[{ key: 'a', image: 'https://i.imgur.com/8FOIQMS.jpg' }, { key: 'b', image: 'https://i.imgur.com/naA7BCY.jpg' }]}
                                    horizontal={true}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity onPress={() => Actions.push('ProductList')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                {/* <Animatable.Image animation={"fadeInUpBig"} source={{ uri: item.image }} style={{ height: 200, width: 180, resizeMode: 'contain' }} /> */}
                                                <Image
                                                    style={{ height: 200, width: 180, resizeMode: 'contain' }}
                                                    source={{
                                                        uri: item.image
                                                    }}

                                                />
                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                                <FlatList
                                    data={[{ key: 'a', image: 'https://i.imgur.com/rglnj8l.jpg' }, { key: 'b', image: 'https://i.imgur.com/gq68Lad.jpg' }]}
                                    horizontal={true}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity onPress={() => Actions.push('ProductList')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                                <Image
                                                    style={{ height: 200, width: 180, resizeMode: 'contain' }}
                                                    source={{
                                                        uri: item.image
                                                    }}

                                                />

                                            </View>
                                        </TouchableOpacity>
                                    }
                                />
                                <Text style={{ textAlign: 'center', fontSize: 20, color: '#191919', marginTop: 20, fontFamily: 'Alegreya' }}>Discover New</Text>
                                <Text style={{ textAlign: 'center', fontSize: 12, color: '#191919', fontFamily: 'Alegreya' }}>Stay Updated on what's new</Text>
                                <FlatList
                                    data={[{ key: 'a', image: 'https://i.imgur.com/7YPhIwD.jpg' }, { key: 'b', image: 'https://i.imgur.com/6GHChBg.jpg' }, { key: 'c', image: 'https://i.imgur.com/QfE7QBG.jpg' }]}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

                                            <Image source={{ uri: item.image }} style={{ height: 150, width: width - 40, marginLeft: 10, resizeMode: 'contain' }} />


                                        </View>
                                    }
                                />
                                <Text style={{ textAlign: 'center', fontSize: 20, color: '#191919', marginTop: 10, fontFamily: 'Alegreya' }}>Brand in focus</Text>
                                <Text style={{ textAlign: 'center', fontSize: 12, color: '#191919', fontFamily: 'Alegreya' }}>Show some brand love</Text>

                                <FlatList
                                    data={[{ key: 'a', image1: 'https://i.imgur.com/PZmWJek.jpg', image2: 'https://i.imgur.com/LcJvxcs.jpg' }, { key: 'b', image1: 'https://i.imgur.com/CLs6xrG.jpg', image2: 'https://i.imgur.com/HTGZaG5.jpg' },
                                    { key: 'c', image1: 'https://i.imgur.com/PZmWJek.jpg', image2: 'https://i.imgur.com/LcJvxcs.jpg' }, { key: 'd', image1: 'https://i.imgur.com/PZmWJek.jpg', image2: 'https://i.imgur.com/LcJvxcs.jpg' }]}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

                                            <Image onPress={() => Actions.push('ProductList')} source={{ uri: item.image1 }} style={{ height: 150, width: 150, marginLeft: 10, resizeMode: 'contain' }} />
                                            <Image onPress={() => Actions.push('ProductList')} source={{ uri: item.image2 }} style={{ height: 150, width: 150, marginLeft: 10, resizeMode: 'contain' }} />


                                        </View>
                                    }
                                />

                            </View>

                        </View>
                    </ScrollView>
                </View>

            </SideMenu>

        );
    }
}
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
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
/* >*/
export default connect(state => ({
    state: state.counter
}),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(Home);