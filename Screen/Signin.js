import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, 
  Button,Dimensions,AsyncStorage
  } 
  from 'react-native';
import * as Animatable from  'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as firebase from  'firebase';
import { Value } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-async-storage/async-storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJox47w7VScGTawO_U0J3IYxvEuul3oJI",
  authDomain: "majorproject2020-d208e.firebaseapp.com",
  databaseURL: "https://majorproject2020-d208e.firebaseio.com",
  projectId: "majorproject2020-d208e",
  storageBucket: "majorproject2020-d208e.appspot.com",
  messagingSenderId: "908585590899",
  appId: "1:908585590899:web:be3af33103350babc30a06",
  measurementId: "G-0JM3NSE7Q9"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class signIn extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      logged_in:'0'
    }; 
    this.handle_email=this.handle_email.bind(this);  
    this.handle_password=this.handle_password.bind(this);
  }
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  handle_email(text){
    this.setState({email:text});
  }
  handle_password(pass){
    this.setState({password:pass});
  }
  
  form_data(email,pass,navigate) {
    // alert("email-->"+email +""+"pass-->"+pass);
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(function (user) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          AsyncStorage.setItem("logged_in",'1');
          // AsyncStorage.getItem('logged_in').then((value) =>console.log(value));
          var ref= firebase.database().ref('users/'+user.uid);
          ref.on('value',function getdata(data) {
            // console.log(data);
            AsyncStorage.setItem('user',JSON.stringify(data));  
          })
          alert("You Logged In Successfully!");
            navigate('Show_child');
          
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
    })
    .catch(function(error) {
      AsyncStorage.setItem("logged_in",'0');
      var error_code=error.code;
      var error_mess=error.message;
      AsyncStorage.getItem('logged_in').then((value) =>console.log(value));
      alert(error_mess);
      
    })
  }
  render (){
    const {navigate}=this.props.navigation;
    return (
      <View style = {styles.container}>
          <StatusBar backgroundColor='#ff0080' barStyle="light-content"/>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.text}>Please Sign in with your account.</Text>
          </View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
              
          <View style={{marginTop:-80}}>
            <View>
              <Text style={styles.text_footer}>Email Id</Text>
              <FontAwesome 
                name="user-o"
                color='#ff0080'
                size={20}
                style={styles.font_style}
                />
              <TextInput 
                placeholder="Your Email ID"
                placeholderTextColor="#666666"
                style={styles.textInput}
                onChangeText={this.handle_email}    
                />
              <Animatable.View
                animation="bounceIn"
                >
                <Feather 
                  name="check-circle"
                  color="green"
                  size={20}
                  style={styles.feather_style}
                  />
              </Animatable.View>
              </View>


            <View>
              <Text style={styles.text_footer}>Password</Text>
              <FontAwesome 
                name="lock"
                color='#ff0080'
                size={20}
                style={styles.font_style} 
                />
              <TextInput 
                placeholder="Your Password"
                placeholderTextColor="#666666"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={this.handle_password}    
                />
              <Animatable.View
                animation="bounceIn"
                >
                <Feather 
                  name="eye"
                  color="#ff0080"
                  size={20}
                  style={styles.feather_style}
                  />
              </Animatable.View>
            </View>
            <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            <View style={{marginTop:10}}>
              <Button 
               title="Sign In"
                color="#ff0080"
                // onPress={()=> this.props.navigation.navigate('Show_child')}
                onPress={()=>this.form_data(this.state.email,this.state.password,navigate)}
              />
            </View>
            <View style={{marginTop:10}}>
              <Button 
                title="Sign up"
                color="#ff0080"
                onPress={()=> this.props.navigation.navigate('Signup')}
                
              />
            </View>
            
          </View>
          </Animatable.View>
      </View>
    );
  }
}

export default signIn;



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
    paddingVertical: 120,
    paddingHorizontal: 30,
  
  },
  text: {
    color: '#FFF',
    marginTop:5,
    marginRight:121,

  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight:200,
    marginTop:50
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    paddingTop:15
  },
  textInput: {
    color: '#05375a',
    fontSize:17,
    marginTop:-24,
    paddingLeft:35,
    borderBottomWidth:0.2
  },
  font_style:{
    marginTop:10
  },
  feather_style:{
    alignItems:'flex-end',
    marginLeft:280,
    marginTop:-24 
  },
  signIn: {
    width: 200,
    height: 60,
    borderRadius: 100,
    marginTop:10,
    marginLeft:100
  },
  Button:{
    paddingTop:20,
    marginTop:20
  }
  
});
