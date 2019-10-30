import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import signin from '../assets/signin.png';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
        backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        };

    onPressLogin = () => {
    this.props.navigation.navigate('Home')
    }
        
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.welcome}>Welcome to Well Balanced!</Text>
        <Text style={styles.about}>This is a description of the app and its purpose of existence.</Text>
        <Text style={styles.instructions}>To get started, login to the app with your google account! </Text>
        <TouchableOpacity onPress={this.onPressLogin}>
            <Image source={signin} style={styles.signin} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  about: {
    fontSize: 17,
    textAlign: 'center',
    marginTop:2,
    marginBottom: 60,
    marginLeft: 30,
    marginRight:30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop:40,
    marginBottom: 18,
    marginLeft: 30,
    marginRight:30,

  },
  logo:{
    width: 200,
    height:100
  },
  signin:{
    marginTop:0,
    width: 300,
    height: 80,
  }
});