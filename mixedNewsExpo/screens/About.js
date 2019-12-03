import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

let API_KEY = "0a18e85ba53d1a55afd5da056eadc0f3"

export default class About extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        let weather_text = JSON.stringify(json)
        let split_weather = weather_text.split('{')
        console.log("Split weather 0:")
        console.log(split_weather[0])
      });
  }

  render() {
    let text = 'Waiting..';
    let weather = "weather is .. ";
    var lat = ""
    var long = ""
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      text2 = text.split(":");
      text3 = text2[6].split(",")
      //console.log("text3:")
      //console.log(text3[0])
      long = text3[0]
      //console.log("text 2 index 4")
      //console.log(text2[4])
      text4 = text2[4]
      text5 = text4.split(',')
      lat = text5[0]
      //console.log("lat is " + lat);
      //console.log("long is " + long);
    }

    weather = this.fetchWeather(lat, long);
    console.log("the weather is: " +  JSON.stringify(weather))

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        <Text style={styles.paragraph}>{weather}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
