import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import logo from '../assets/logo.png';



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
      <ScrollView contentContainerStyle={styles.container}>
          <View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: 20, borderRadius: 10}}> 
            <Image source={logo} style={styles.logo}/>
          </View>
          
          <Text style={styles.about}>
              In an increasingly polarized age, it becomes difficult to 
              find an unbiased perspective. Only consuming media that 
              already agrees with one's political biases only serves to
              exacerbate the issue and make the nation even more ploarized.
              The point of Well Balanced is to provide intentionally liberal
              and intentionally conservative biased perspectives. 
          </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(7, 50, 84, 1)'
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },
  about: {
    fontSize: 24,
    textAlign: 'center',
    marginTop:20,
    marginBottom: 60,
    marginLeft: 30,
    marginRight:30,
    color:'white',
  },
  logo:{
    width: 200,
    height:100
  },
  signin:{
    marginTop:0,
    width: 300,
    height: 80,
  },

});