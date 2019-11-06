import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Image } from "react-native";
import logo from '../assets/logo.png'
import * as firebase from 'firebase';
import config from '../config.js'



class Home extends React.Component {

static navigationOptions = {
title: "Home",
headerStyle: {
backgroundColor: "#73C6B6"
}
};

constructor(){
    super();
    if (!firebase.apps.length){
    firebase.initializeApp(config);
    }

    this.state = {
        currentItem: '',
        username: '',
        items: []
      }
}

getUserData = () => {
    let ref = firebase.database().ref('items/');
    ref.on('value', snapshot => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
        newState.push({
            id: item,
            title: items[item].title,
            user: items[item].user
        });
    }
    this.setState({
        items: newState
        });
    });
  }
componentDidMount(){
    this.getUserData();
}

render() {
    this.componentDidMount();
return (
<ScrollView >

    <View style={styles.container}>

        <View>
            {this.state.items.map( (item) => {
                return(
                    <View>
                    <Text> {item.id}</Text>
                    <Text> {item.title}</Text>
                    <Text> {item.user}</Text>
                    </View>

                );
            })}
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

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Climate Change</Text>
        </View>
        <Text style={styles.articleBlue}> 
            https://arandomsite.com/article/that/is/very/conservative/
        </Text>
        <Text style={styles.articleRed}> 
            https://arandomsite.com/article/that/is/very/liberal
        </Text>
    </View>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Gun Control</Text>
        </View>
        <Text style={styles.articleBlue}> 
            https://arandomsite.com/article/that/is/very/conservative/
        </Text>
        <Text style={styles.articleRed}> 
            https://arandomsite.com/article/that/is/very/liberal

        </Text>
    </View>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Politics</Text>
        </View>
        <Text style={styles.articleBlue}> 
            https://arandomsite.com/article/that/is/very/conservative/
        </Text>
        <Text style={styles.articleRed}> 
            https://arandomsite.com/article/that/is/very/liberal

        </Text>
    </View>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Economy </Text>
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