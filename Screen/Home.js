import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, 
  Button,Dimensions,AsyncStorage
  } 
  from 'react-native';
import * as Animatable from  'react-native-animatable';


class Home extends React.Component {
  constructor(props){
    super(props);
    let logged_status=AsyncStorage.getItem('logged_in');
    // this.props.navigation.navigate('show_child');
    // alert("You Logged Out Successfully!")     
  }
  render (){
    return (
      <View style = {styles.container}>
          <StatusBar backgroundColor='#ff0080' barStyle="light-content"/>
          <View style={styles.header}>
            <Animatable.Image 
                  animation="bounceIn"
                  duraton="1500"
              source={require('../Asset/Images/main-image.jpg')}
              style={styles.logo}
              resizeMode="stretch"
              />
          </View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
            <Text style={styles.title}>Stay Connected and Learn with your Kids!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.signIn}>
              <Button 
                title="Get Started"
                color="#ff0080"
                onPress={()=> this.props.navigation.navigate('Signin')}
              />
            </View>


          </Animatable.View>
      </View>
    );
  }
}

export default Home;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.5;
const width_logo=height;
// console.log("new this is height-->",height);
// console.log(" new this is height-->",height_logo);
// console.log(" new this is height-->",width_logo);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ff0080'
  },
  header:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#FFF'
  },
  footer:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  text: {
    color: 'grey',
    marginTop:5
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  signIn: {
    width: 200,
    height: 60,
    borderRadius: 100,
    marginTop:10,
    marginLeft:100
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
});
