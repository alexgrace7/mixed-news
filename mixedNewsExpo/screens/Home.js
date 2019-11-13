import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Image, Linking } from "react-native";
import logo from '../assets/logo.png'
import * as firebase from 'firebase';
import config from '../config.js'
import wb_logo from '../assets/wb_logo.png';

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

    <Image source={wb_logo} style={"width:200px;height:600px;"}/>
    <Text style={{fontSize:15, marginBottom:10}}> Updated: 11/12/2019 </Text>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> Economy</Text>
        </View>
        <Text style={styles.articleBlue} onPress={() => Linking.openURL('https://www.cnn.com/2019/11/12/business/apple-card-gender-bias/index.html')}> 
        
            Apple's Credit Card May Be Gender Biased
        </Text>
        <Text style={styles.articleRed} onPress={() => Linking.openURL('https://www.foxbusiness.com/money/trump-cutting-middle-class-taxes')}> 
            Trump Plans To Unveil New Tax Cut For Middle Class in 2020
        </Text>
        <Text style={styles.articleBlue} onPress={() => Linking.openURL('https://www.cnn.com/2019/11/12/business/richard-branson-south-africa-apology/index.html')}> 
        
            Richard Branson Tweets Apology After Posting A Picture of All White People When Unveiling South Africa News
        </Text>
        <Text style={styles.articleRed} onPress={() => Linking.openURL('https://www.breitbart.com/politics/2019/11/12/donald-trump-booming-economy-allows-tough-trade-negotiation-china/')}> 
        
            A Booming Economy Gives Trump Strong Upper Hand in China Negotiations
        </Text>
    </View>

    <View style={styles.topicBox}>
        <View style={styles.topicBar}>
            <Text style={styles.topic}> International </Text>
        </View>
        <Text style={styles.articleRed} onPress={() => Linking.openURL('https://www.thesun.co.uk/tech/10328958/jeremy-corbyn-boris-johnson-election-deepfake-clips/')}> 
        
            Fake Video Shows Jeremy Corbin Backing Boris Johnson for Prime Minister
        </Text>
        <Text style={styles.articleBlue} onPress={() => Linking.openURL('https://www.nytimes.com/2019/11/12/world/europe/spain-government-sanchez-podemos.html')}> 
            Spains Left Comes Up With Plan to Form A Government
        </Text>
        <Text style={styles.articleRed} onPress={() => Linking.openURL('https://www.jpost.com/Breaking-News/Explosions-at-house-of-Islamic-Jihads-Abu-al-Ata-Palestinian-report-607579')}> 
        
            Isreal Pounded By 200 Rockets Following Killing of Jihadi Leader
        </Text>
        <Text style={styles.articleBlue} onPress={() => Linking.openURL('https://www.huffingtonpost.ca/entry/housing-affordability-canada_ca_5dcafda6e4b0fca7bb59b7b3?utm_hp_ref=ca-homepage')}> 
        
            Canadian Homes Have Become More Affordable for 9 Straight Months
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