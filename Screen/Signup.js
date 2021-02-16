import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, 
  Button,Dimensions,
  } 
  from 'react-native';
import * as Animatable from  'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as firebase from  'firebase';

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


class signUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',
      lname:'',
      email:'',
      password:''
    }; 
    this.handle_fname=this.handle_fname.bind(this);
    this.handle_lname=this.handle_lname.bind(this);
    this.handle_email=this.handle_email.bind(this);  
    this.handle_password=this.handle_password.bind(this);
  }
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  handle_fname(f_name){
    this.setState({fname:f_name})
  }
  handle_lname(l_name){
    this.setState({lname:l_name})
  }
  handle_email(text){
    this.setState({email:text});
  }
  handle_password(pass){
    this.setState({password:pass});
  }
  
  form_data(data,navigate) {
    firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
    .then(function (user) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          if (data.fname.length==0 && data.lname.length==0){
            alert("All Fields Are Required!");

          }
          else if(data.fname.length==0){
            alert("First Name Is Required!");

          }
          else if (data.lname.length==0){
            alert("Last Name Is Required!");

          }
          else{
            firebase.database().ref('users/'+user.uid+'/user_profile/').set({
              first_name:data.fname,
              last_name:data.lname,
              email:user.email,
              user_id:user.uid
          
            });
            alert("Hi"+" "+data.fname+ ",Your Account Created Successfully!");
            navigate('Signin');  

          }       
        } else {
          // User is signed out.
          // ...
        }
      });
    })
    .catch(function(error) {
      var error_code=error.code;
      var error_mess=error.message;
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
            <Text style={styles.text}>Please Sign up to our platform to enjoying more feature.</Text>
          </View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
              <View style={{marginTop:-60}}>
                <View>
                  <Text style={styles.text_footer}>First Name</Text>
                  <FontAwesome 
                    name="user-o"
                    color='#ff0080'
                    size={20}
                    style={styles.font_style}
                    />
                    <TextInput 
                      placeholder="First Name"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      onChangeText={this.handle_fname}    
                      />
                  </View>
                  <View>
                    <Text style={styles.text_footer}>Last Name</Text>
                    <FontAwesome 
                      name="user-o"
                      color='#ff0080'
                      size={20}
                      style={styles.font_style}
                    />
                    <TextInput 
                      placeholder="Last Name"
                      placeholderTextColor="#666666"
                      style={styles.textInput}
                      onChangeText={this.handle_lname}        
                      />
                  </View>
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
                    onChangeText={this.handle_password} 
                    secureTextEntry={true}   
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
                <View style={{marginTop:10}}>
                  <Button 
                  title="Sign Up"
                    color="#ff0080"
                    onPress={()=> this.form_data(this.state,navigate)}
                  />
                </View>
              </View>
               
           
          </Animatable.View>
      </View>
    );
  }
}

export default signUp;



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ff0080'
  },
  header:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#FFF',
    marginTop:20
  },
  footer:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 160,
    paddingHorizontal: 30
  },
  text: {
    color: '#FFF',
    marginTop:5,
    marginLeft:15

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
    marginTop:5
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
    marginTop:20
  }
 
  
});
