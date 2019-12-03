import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import logo from '../assets/logo.png';
import whitehouse from '../assets/whitehouse.jpg';


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
    
    constructor(props) {
      super(props);
      this.state={
        image1Opacity: 1,
        image1FadeIn: false,
      };
    }

    componentDidMount(){
      setInterval(()=>{ 
            if(this.state.image1Opacity >= 1){
              this.setState((state)=>({
              image1Opacity: 0
              }))
            }else{
               this.setState((state)=>({
              image1Opacity: state.image1Opacity + 0.1
              }))
            }}
            , 500)
    }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>

        <Image source = {whitehouse} style={styles.background}></Image>
        <View style={styles.container}>
          <Image source={logo} style={{width: 200,height:100,opacity: this.state.image1Opacity}}/>

            <Text style={styles.welcome}>
              <Text style={{color:'#00FFFF', fontSize: 45}}> WELL
              <Text style={{color:'red', fontSize: 45}}> BALANCED</Text>
              </Text>
            </Text>

          <Text style={styles.about}>
              A news app that provides conservative and 
              liberal articles on the same topic. Explore 
              constrasting opinions in politics today.
          
          </Text>
          <TouchableOpacity onPress={this.onPressLogin} style={styles.button}>
              <Text style={{color:'white', fontSize: 20,}}> Continue to News  > </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    width:300,
    height:50,
    marginTop: 60,
    borderRadius:10,
    fontFamily:"Futura-Medium",

  },
  welcome: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontFamily:"Futura-Medium",
    textShadowColor: 'white',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 7,
  },
  about: {
    fontSize: 25,
    fontWeight:"600",
    textAlign: 'center',
    marginTop:15,
    marginBottom: 20,
    marginLeft: 30,
    marginRight:30,
    fontFamily:"Futura-Medium",
    color:'white',
  },
  logo:{
    width: 200,
    height:100,
  },
  background:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3
  }
});