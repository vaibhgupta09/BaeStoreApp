import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
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
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f9f5ed',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,

  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});
import TypeWriter from 'react-native-typewriter';
import { Actions } from 'react-native-router-flux';

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      {/* <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View> */}

      <View style={{ width: '60%', alignItems: 'center', marginTop: 25 }}>

        <Image
          style={styles.avatar}
          source={{ uri }}
        />

        <TypeWriter typing={1} style={{ fontSize: 22, fontFamily: 'Rochester', marginTop: 15, color: '#e4717a', textAlign: 'center' }}>Hey Vaibhav !</TypeWriter>

        <TouchableOpacity onPress={() => Actions.push('Profile')} style={{ flexDirection: 'row', marginTop: 30 }}>
          <Left>
            <Icon name={'ios-person'} style={{ color: '#898989', fontSize: 20 }} />
          </Left>
          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              Account
           </Text>
          </Body>
          <Right>
            <Icon name={'ios-arrow-forward'} style={{ color: '#898989', fontSize: 16 }} />
          </Right>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.push('Orders')} style={{ flexDirection: 'row', marginTop: 20 }}>
          <Left>
            <Icon name={'ios-list-box'} style={{ color: '#898989', fontSize: 20 }} />
          </Left>
          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              Orders
           </Text>
          </Body>
          <Right>
            <Icon name={'ios-arrow-forward'} style={{ color: '#898989', fontSize: 16 }} />
          </Right>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => Actions.push('Wishlist')}>
          <Left>
            <Icon name={'ios-heart'} style={{ color: '#898989', fontSize: 20 }} />
          </Left>
          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              Wishlist
           </Text>
          </Body>
          <Right>
            <Icon name={'ios-arrow-forward'} style={{ color: '#898989', fontSize: 16 }} />
          </Right>
        </TouchableOpacity>
        <View style={{ marginTop: 25, backgroundColor: '#898989', height: 1, width: '60%' }} />

        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}>

          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              FAQs
           </Text>
          </Body>

        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>

          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              About
         </Text>
          </Body>

        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>

          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#191919' }}>
              Contact Us
         </Text>
          </Body>

        </TouchableOpacity>
        <View style={{ marginTop: 25, backgroundColor: '#898989', height: 1, width: '60%' }} />
        <TouchableOpacity onPress={() => Actions.push('LoginScreen')} style={{ flexDirection: 'row', marginTop: 25 }}>
          <Left>
            <Icon name={'ios-log-out'} style={{ color: '#e4717a', fontSize: 16 }} />
          </Left>
          <Body>
            <Text style={{ fontFamily: 'Alegreya', fontSize: 18, color: '#e4717a' }}>
              Logout
         </Text>
          </Body>
          <Right>

          </Right>

        </TouchableOpacity>
      </View>

      {/* <Text
        onPress={() => onItemSelected('About')}
        style={styles.item}
      >
        About
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Contacts
      </Text> */}
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};