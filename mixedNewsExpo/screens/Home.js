import React, { Component } from "react";
import {  StyleSheet, Text, View,  ScrollView, Image, Linking, SectionList, TouchableOpacity,  } from "react-native";
import logo from '../assets/logo.png'
import * as firebase from 'firebase';
import config from '../config.js'
import flag from '../assets/flag.png'
import { Dimensions } from 'react-native';
import sidebar from '../assets/sidebar.png';

if (!firebase.apps.length){
    firebase.initializeApp(config);
    }

getData = () => {
    database = firebase.database();
    var ref = database.ref('cards'); //the root of the db
    ref.on('value',gotData, errData); // what to do with data
}

function gotData(data){
    var objectsArray = data.val(); // the array of cards
    var cardItems = Object.keys(objectsArray); //  each card object in the array

    // <SectionList sections={objectsArray} 
    //     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    //     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    //     keyExtractor={(item, index) => index}
    // >
    // </SectionList>
    
    

    // var li = createElement(SectionList, initials)
    

    for ( var i=0; i < cardItems.length; i++){
        var k = cardItems[i];
        theTopic = objectsArray[k].title;

        var links = objectsArray[k].data; // the link array object
        for ( var j =0; j < links.length; j++){
            econArr=[];
            intArr=[];
            var x = links[j]; // the link
             console.log(x)
        }
        // console.log(topic)  
    }
    //  console.log(item.topic) //print each 
    }

    var intArr=[];
    var econArr=[];
    var allLinks = [];



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
        title: "Well Balanced",
        updated:"Updated: Thursday November 21st 2019",
        sectionData: "",
    };

}

componentWillMount(){
    getData();

}

deviceWidth = Dimensions.get('window').width;

onPressAbout = () => {
    this.props.navigation.navigate('About')
    }


render() {
    this.componentWillMount();

return (
<ScrollView >

    <View style={styles.container}>
        <View >
            <View style={{ display: 'flex', flexDirection:'row'}}>

                <Text style={styles.header}> {this.state.title}</Text>

            
            </View>

            
            {/* <Image source={wb_logo} style={"width:200px;height:600px;"}/> */}
            <Text style={{fontSize:15, marginBottom:10, textAlign:'center'}}> {this.state.updated}</Text>

        </View>
        <TouchableOpacity onPress={this.onPressAbout} style={{right:10, top:3, position:'absolute'}}>
                    <Image source={sidebar} style={{width:30, height:35}} />
        </TouchableOpacity>

        <View id='sections'>

        </View>



        {/* <View style={styles.topicBox}>
            <View style={styles.topicBar}>
                <Text style={styles.topic}> Economy</Text>
            </View>
            <Text style={styles.articleBlue} onPress={() => Linking.openURL('https://www.cnn.com/2019/11/12/business/apple-card-gender-bias/index.html')}> 
            
                    Is the Apple Credit Card Gender Biased?
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
 */}

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
      textAlign:'center',
    },
    header:{
        textAlign:'center',
        fontSize: 40,


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
        borderColor: 'black',
        borderWidth: 4

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