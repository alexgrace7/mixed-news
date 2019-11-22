import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import alex from '../assets/alex.png';
import signin from '../assets/signin.png';
import Animated from 'react-native-reanimated';

export default class About extends Component {

    static navigationOptions = {
        title: 'About',
        headerStyle: {
        backgroundColor: '#03A9F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
        };

      
    


  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.title}>About</Text>
        <Text style={styles.about}>
            In an increasingly polarized age, it becomes difficult to 
            find an unbiased perspective. Only consuming media that 
            already agrees with one's political biases only serves to
            exacerbate the issue and make the nation even more ploarized.
            The point of Well Balanced is to provide intentionally liberal
            and intentionally conservative biased perspectives. See a pic 
            of our founder Alex below!!
        
        </Text>
        <Image source={alex} style={styles.logo}/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 40,
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