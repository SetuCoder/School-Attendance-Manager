//This app is a small attendance management system which can keep a record of no. of students present & no. of absent for the day. Done by Setu

import * as React from 'react';
import {View,Text,Button,StyleSheet,Platform,StatusBar} from 'react-native';
import AppHeader from './components/AppHeader';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/HomeScreen';
import IntroductionScreen from './screens/IntroductionScreen';
import SummaryScreen from './screens/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

render(){
     return(
       <View>
       <AppHeader/>
       <AppContainer/>
      </View>
    )
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  IntroductionScreen : IntroductionScreen
})

const AppContainer = createAppContainer(AppNavigator)