import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, 
  Button,Dimensions,ScrollView,AsyncStorage
  } 
  from 'react-native';
import * as Animatable from  'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as firebase from 'firebase';

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

class Show_child extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      names:[]
    }
    this.alertItemName=this.alertItemName.bind(this);
  }
  async componentDidMount(){
    let user = await AsyncStorage.getItem('user');
    let user_obj=JSON.parse(user).user_profile;
    var ref= firebase.database().ref('users/'+user_obj.user_id+'/user_child/');
    var self=this;
    ref.on('value',function getdata(data) {
      // console.log(data);
      var arr=[];
      var obj_data=data.val();
      console.log(arr);
      console.log(obj_data);
      var keys=Object.keys(obj_data);
      console.log(keys);
      for(var i=0;i<keys.length;i++){
        arr.push(obj_data[keys[i]]);
      }
      console.log(arr);
      self.setState({names:arr});
    })
    
  }
    
  
  
  alertItemName = (item,navigate) => 
  {
    navigate('Home_drawer');
  }

    render() {
      const {navigate}=this.props.navigation;
       return (
          <View style={styles.container}>
            <StatusBar backgroundColor='#ff0080' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.header_title}>Child List</Text>
          </View>
            <View style={styles.footer}>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                        <TouchableOpacity 
                            key={item.id}
                            onPress = {() => this.alertItemName(item,navigate)}>
                            <View style={styles.card}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardTitle}>{item.child_name}</Text>
                                    <Text style={styles.cardTitle}>Class: {item.child_class}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        ))
                    }
                    <View>
                  <Text>{this.state.user_data}</Text>
                    </View>
                    <View style={{marginTop:10,marginBottom:20}}>
                        <Button 
                            title="+ Add Child"
                            color="#ff0080"
                            onPress={()=> this.props.navigation.navigate('Add_child')}
                        />
                    </View>
                </ScrollView>
            </View>
          </View>
       )
    }
 }
 export default Show_child;

 const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#ff0080'
    },
    header:{
        flex: 0,
        marginTop:60,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        color:'#FFF'
    },
    header_title:{
        color:'#FFF',
        fontSize:25,
        fontWeight:"bold"
    },
    footer:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical:30 ,
    },
    card: {
        height: 70,
        marginLeft:5,
        marginRight:5,
        marginVertical: 5,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,        
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius:8,
        borderBottomLeftRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
      },
   
 })



