import {AsyncStorage,BackHandler,Alert} from 'react-native';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import React from 'react';
/* 
  User Registration and Login
    * User 
    * Registration
    * E-Mail
    * E-Mail Verified
*/
import SplashScreen from './routes/SplashScreen';
import LoginScreen from './routes/Login';
import Home from './routes/Home';
import ProductList from './routes/ProductList';
import ProductDetail from './routes/ProductDetail';
import Cart from './routes/Cart';
import Wishlist from './routes/Wishlist';
import AddAddress from './routes/AddAddress';
import Confirmation from './routes/Confirmation';
import Orders from './routes/Orders';
import ViewOrder from './routes/ViewOrder';
import Profile from './routes/Profile';
import Search from './routes/Search';
import Notification from './routes/Notification';
import Signup from './routes/Signup';

import {Icon} from 'native-base';

onBackPress=()=>{
  console.log(Actions.currentScene);
  if (Actions.currentScene ==  "LoginScreen") {
    Alert.alert(
        'Exit App',
        'Are sure want to exit', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
    )
    return true;
  }
  else{
    console.log('else');
    Actions.pop();
    return true;
   
  }

}
 

const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#fff' }} backAndroidHandler={()=>this.onBackPress()}>
    <Stack key="root">
      <Scene key="SplashScreen" component={SplashScreen} hideNavBar   />
      <Scene key="LoginScreen" component={LoginScreen} hideNavBar  /> 
      <Scene key="Orders" component={Orders} hideNavBar   />
      <Scene key="Home" component={Home} hideNavBar initial  /> 
      <Scene key="ProductList" component={ProductList} hideNavBar   />
      <Scene key="ProductDetail" component={ProductDetail} hideNavBar   />
      <Scene key="Cart" component={Cart} hideNavBar  />
      <Scene key="Wishlist" component={Wishlist} hideNavBar   />
      <Scene key="AddAddress" component={AddAddress} hideNavBar   />
      <Scene key="Confirmation" component={Confirmation} hideNavBar   />
      <Scene key="ViewOrder" component={ViewOrder} hideNavBar/>
      <Scene key="Profile" component={Profile} hideNavBar/>
      <Scene key="Search" component={Search} hideNavBar   />
      <Scene key="Notification" component={Notification} hideNavBar   />
      <Scene key="Signup" component={Signup} hideNavBar   />
    </Stack>
  </Router>
);

export default Routes;