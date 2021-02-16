import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, 
  Button,Dimensions,ScrollView, AsyncStorage
  } 
  from 'react-native';
import * as Animatable from  'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import * as firebase from 'firebase';
import uuid from 'react-native-uuid';


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

class Add_child extends React.Component {
    constructor(props){
        super(props);
        this.state={
          child_name:'',
          child_class:''
        };
        this.handle_name=this.handle_name.bind(this);  
    }
    handle_name(name){
        this.setState({child_name:name});
    }
    Add_child(child_name,child_class,navigate){  
        if(child_class=='' && child_name.length==0){
            alert("All Given Fields Are Required!");
            
        }
        else if(child_class==''){
            alert("Please Enter Child Class!");
        }
        else if (child_name.length==0){
            alert("Please Enter Child Name!");
        }
        else{
            var testUUID = uuid.v1();
            // alert(testUUID);
            AsyncStorage.getItem('user').then((value) =>
               
                firebase.database().ref('users/'+JSON.parse(value).user_profile.user_id+'/user_child/'+testUUID).set({
                    child_name:child_name,
                    child_class:child_class,
                    child_id:testUUID
                })
                
            )
            alert("Your Child Added Successfully!");
            navigate('Show_child');
        }
    }
    render() {
        const {navigate}=this.props.navigation;
       return (
          <View style={styles.container}>
            <StatusBar backgroundColor='#ff0080' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.header_title}>Add Child</Text>
          </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.text_footer}>Child Class</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Select class of your child', value:'none',selected:true},
                            {label: 'Class 1', value: '1'},
                            {label: 'Class 2', value: '2'},
                            {label: 'Class 3', value: '3'},

                        ]}
                        // defaultValue={state.class}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#FFF'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            child_class: item.value
                        })}
                    
                    />
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.text_footer}>Child Name</Text>
                        <FontAwesome 
                            name="user-o"
                            color='#ff0080'
                            size={20}
                            style={styles.font_style}
                        />
                        <TextInput 
                        placeholder="Enter Child Name"
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        onChangeText={this.handle_name}        
                        />
                    </View>
                    <View style={{marginTop:10,marginBottom:20}}>
                        <Button 
                            title="+ Add Child"
                            color="#ff0080"
                            onPress={()=>this.Add_child(this.state.child_name,this.state.child_class,navigate)}
                        />
                    </View>                
                </ScrollView>
            </View>
          </View>
       )
    }
 }
 export default Add_child;

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
  

    textInput: {
        color: '#05375a',
        fontSize:17,
        marginTop:-24,
        paddingLeft:35,
        borderBottomWidth:0.2
    },
    font_style:{
        marginTop:5,
        marginLeft:5
    },
    text_footer: {
        color: '#05375a',
        fontSize: 17,
        paddingTop:15,
        marginLeft:5
    },
 })



