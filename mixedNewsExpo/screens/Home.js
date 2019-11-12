import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import logo from '../assets/logo.png'
import * as firebase from 'firebase';
import config from '../config.js'

if (!firebase.apps.length){
    firebase.initializeApp(config);
    }

getUserData = () => {
    database = firebase.database();
    var ref = database.ref('users');
    ref.on('value', gotData, errData);
}

function gotData(data){
    console.log(data.val());
    var people = data.val();
    var keys = Object.keys(people);
    console.log(keys);
    for( var i=0;i < keys.length; i++){
        var k= keys[i];
        var id = people[k].id;
        var name = people[k].name;
        console.log(id, name);

    }

}

function errData(err){
    console.log('Error!');
    console.log(err);
    
}

class Home extends React.Component {

static navigationOptions = {
title: "Home",
headerStyle: {
backgroundColor: "#73C6B6"
}
};

constructor(props){
    super(props);
    this.state={
        title: "",
        user: ""
    };

}

componentWillMount(){
    getUserData();
}


render() {
    this.componentWillMount();
return (
<ScrollView >

    <View style={styles.container}>

        <View>
            <Text> {this.state.title}</Text>
        </View>

    <Text style={{fontSize:25, fontWeight:'800', marginBottom:10}}>WELL BALANCED</Text>
    <Text style={{fontSize:15, marginBottom:10}}> Updated: 10/30/2019 </Text>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Trending</Text>
        </View>
        <Text style={styles.articleBlue}> 
            https://arandomsite.com/article/that/is/very/conservative/
        </Text>
        <Text style={styles.articleRed}> 
            https://arandomsite.com/article/that/is/very/liberal
        </Text>
    </View>

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
    topic: {
        fontSize: 20,
        letterSpacing: 4,
        fontFamily:"Futura-Medium",
        textTransform:"uppercase",
    },
    topicBox:{
        display: 'flex',
        alignItems:'center',
        marginTop: 20,
        marginBottom:20,

    },
    topicBar:{
        width:300,
         alignItems:'center',
         backgroundColor:"#DDDDDD",
         borderRadius: 35,
    },
    articleBlue:{
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        marginLeft:8,
        color: '#0074D9',
        textAlign:'center',
    },
    articleRed:{
        marginTop: 8,
        marginBottom: 8,
        marginRight: 8,
        marginLeft:8,
        color: '#b94a48',
        textAlign:'center',
    }
});