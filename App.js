import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Home from './Screen/Home';
import signIn from './Screen/Signin';
import signUp from './Screen/Signup';
import Show_child from './Screen/Show_child';
import Add_child from './Screen/Add_child';
import Home_drawer from './Screen/navigation_drawer/Home_drawer';

const Stack = createStackNavigator();

export default class  App extends React.Component {
  render (){
    return (
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Signin" component={signIn}/>
            <Stack.Screen name="Signup" component={signUp}/>
            <Stack.Screen name="Show_child" component={Show_child}/>
            <Stack.Screen name="Add_child" component={Add_child}/>
            <Stack.Screen name="Home_drawer" component={Home_drawer}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
