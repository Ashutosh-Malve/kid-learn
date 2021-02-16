import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {View,Text} from 'react-native';


class  Home_screen extends React.Component {
  render (){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
        </View>
    );
  }
}
export default Home_screen;