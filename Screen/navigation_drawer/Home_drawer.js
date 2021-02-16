import React,{Component} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './home_screen';
import Idalpha from './Identify_alphabate';
import {DrawerContent} from './drawer_content';
import Icon from 'react-native-vector-icons/FontAwesome';




const drawer = createDrawerNavigator();



export default class Home_drawer extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (
          <drawer.Navigator
            drawerContent={props =><DrawerContent {...props}/>}
          >
            <drawer.Screen name="Home" component={HomeScreen} 

            options={{ 
              headerShown:true,
              headerStyle:{
                backgroundColor:'#ff0080',
              },
              headerTitleStyle:{
                color:"#FFF",
                marginLeft:60
              },
              title:"Dashboard"
            }}
            />
            <drawer.Screen name="Idalpha" component={Idalpha}
              options={{ 
                headerShown:true,
                headerStyle:{
                  backgroundColor:'#ff0080',
                },
                headerTitleStyle:{
                  color:"#FFF",
                  marginLeft:30
                },
                title:"Identify Alphabate"
              }}
            />
            
          </drawer.Navigator>
         
    );
  }
}
