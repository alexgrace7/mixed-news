import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import logo from '../assets/logo.png'

class Home extends React.Component {
static navigationOptions = {
title: "Home",
headerStyle: {
backgroundColor: "#73C6B6"
}
};

render() {
return (
<ScrollView >

    <View style={styles.container}>
    <Text style={{fontSize:25}}>WELL BALANCED</Text>
    </View>

</ScrollView>
);
}
}

export default Home;

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      flex: 1,
      alignItems: 'center',
      justifyContent:'space-between',
      backgroundColor: '#FFFFFF',
    },
});