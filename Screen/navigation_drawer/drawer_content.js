import React,{Component} from 'react';
import {View,Text,StyleSheet,AsyncStorage} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    TouchableRipple,
    Switch,
    Drawer
} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

async function signOut(){
    await AsyncStorage.setItem("logged_in",'0');
    alert("You Logout Successfully!");
}
export function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Nishant Nimbhorkar</Title>
                                <Caption style={styles.caption}>@Parent Account</Caption>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>Email :</Paragraph>
                            <Caption style={styles.caption}>nbnimbhorkar@mitaoe.ac.in</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>Child Name :</Paragraph>
                            <Caption style={styles.caption}>Sonu</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>Child Class :</Paragraph>
                            <Caption style={styles.caption}>1</Caption>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth:0.18,
                        marginTop:10,
                        width:200,
                        marginLeft:35
                    }}
                />
                <View style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="dashboard" 
                                color={'#ff0080'}
                                size={size}
                                />
                            )}
                        label="Dashboard"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="sort-alpha-asc" 
                                color={'#ff0080'}
                                size={size}
                                />
                            )}
                        label="Identify Alphabate"
                        onPress={() => {props.navigation.navigate('Idalpha')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon2 
                                name="blackboard" 
                                color={'#ff0080'}
                                size={size}
                                />
                            )}
                        label="Practice By Writing"
                        onPress={() => {props.navigation.navigate('Logout')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon
                                name="file-audio-o" 
                                color={'#ff0080'}
                                size={size}
                                />
                            )}
                        label="Learn By Speaking"
                        onPress={() => {props.navigation.navigate('Logout')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="child" 
                                color={'#ff0080'}
                                size={size}
                                />
                            )}
                        label="Change Your Child"
                        onPress={() => {props.navigation.navigate('Show_child')}}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
            <DrawerItem 
                    icon={({color, size}) => (
                        <Icon1 
                        name='logout' 
                        color={'#ff0080'}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginLeft:5
    },
    row: {
      marginTop:15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });

 