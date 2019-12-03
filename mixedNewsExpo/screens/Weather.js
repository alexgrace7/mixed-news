import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { ScrollView } from 'react-native-gesture-handler';
import weather from '../assets/weather.jpg';
import { Dimensions } from 'react-native';

let API_KEY = "fec89da31c7a6e0f43bd5e89e845acfc"
let loc = ""
let cond = ""
const { width } = Dimensions.get('window');

export default class Weather extends Component {
  state = {
    isLoading: false,
    location: null,
    temperature: 0,
    error: null,
    city: null,
    humidity: null,
    tempMax: null,
    tempMin: null, 
    lat: null, 
    long: null,
  };

  static navigationOptions = {
    title: 'Weather',
    headerStyle: {
    backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
      },
    };


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          error => {
            this.setState({
              error: 'Error Gettig Weather Condtions'
            });
          }
        );
        navigator.geolocation.getCurrentPosition(
            position => {
              const location = JSON.stringify(position);
            console.log("INSIDE COMP DID MOUNT " + location)
              this.setState({
                   lat: position.coords.latitude, 
                   long: position.coords.longitude,
                });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
      }

      fetchWeather(lat = this.state.lat, lon = this.state.long) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            console.log("INSIDE FETCH WEATHER FUNC")
            this.setState({
                city: json.name,
                temperature: json.main.temp,
                weatherCondition: json.weather[0].description,
                isLoading: false, 
                humidity: json.main.humidity,
                tempMax: json.main.temp_max,
                tempMin: json.main.temp_min,
            })
          });
      }


  render() {
    const { isLoading } = this.state;

    return (

<ScrollView contentContainerStyle={styles.container}>
    <Image source = {weather} style={styles.background}></Image>
      <View >
          {isLoading ? (
              <Text> Loading Your Weather</Text>
          ):(
              <View>
              <Text style={styles.header}>{this.state.city}</Text>
              <Text style={{color:'white', fontSize: 25}}>{this.state.weatherCondition}</Text>
              </View>
              
          )}
      </View>
      

      <View style={styles.view}>
          <Text style={{ color: 'white', fontSize: 25, textAlign:'center',}}> Temperature: {this.state.temperature} ° </Text>
      </View>
      <View style={styles.view}>
          <Text style={{ color: 'white', fontSize: 25, textAlign:'center',}}> Humidity: {this.state.humidity}  </Text>
      </View>
      <View style={styles.view}>
          <Text style={{ color: 'white', fontSize: 25, textAlign:'center',}}> Temperature High: {this.state.tempMax} °  </Text>
      </View>
      <View style={styles.view}>
          <Text style={{ color: 'white', fontSize: 25, textAlign:'center',}}> Temperature Low: {this.state.tempMin} °  </Text>
      </View>

</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily:"Futura-Medium",

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  header:{
      color:'white',
      fontSize: 40,
      marginTop: 15,
      fontWeight: '800',
      
  }, 
  background:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 2
  }, 
  view: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 116, 217, 0.4)',
    width: width - 80,
    margin: 10,
    height: '15%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
    display: 'flex',
    justifyContent: 'center',


    

},
});