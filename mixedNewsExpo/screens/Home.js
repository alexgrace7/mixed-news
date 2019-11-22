import React, { Component } from "react";
import {  StyleSheet, Text, View,  ScrollView, Image, Linking, SectionList, TouchableOpacity,  } from "react-native";
import * as firebase from 'firebase';
import config from '../config.js'
import sidebar from '../assets/sidebar.png';


if (!firebase.apps.length){
    firebase.initializeApp(config);
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
        title: "WELL BALANCED",
        updated:"Updated: Thursday November 21st 2019",
        stocks: "Down Jones: 27,822 | S&P 300: 3,105",
        objectsArray : null,
        sectionData: [
            {
                "title": "International",
                "data": ["Netanyaho to be indicted for fraud", "Protesters attempt to flee Hong Kong university",
                        "colombia protests prompt border closures", "The world's best pension system is being pushed to the brink"]
            },
            {
                "title": "Economy",
                "data": ["Personal loans are 'growning like a weed', a potential warning sign for the U.S. economy",
                 "Split shifts, unpredictale hours. A retail worker's life."]
            },
            {
                "title": "Business",
                "data": ["How a lousy tenant seeded an idea and a moneymaking business",
                 "Last month, Fed officials said the 3 rate cuts of 2019 were enough",
                "Trump says China isn't 'stepping up', and trade talks show signs of languishing"]
            },
            {
                "title": "Politics",
                "data": ["Hill said she told Songland that his efforts in Ukraine would 'blow up'",
                 "Impeachment hearings live updates: Trump says Democrats 'looked like fools' during public hearings"]
            },
            {
                "title": "Technology",
                "data": ["The Technology 202: Getting digital evidence can be hard for police. This bill would create a new office to help."
                , "Apple says its App Store is ‘a safe and trusted place.’ We found 1,500 reports of unwanted sexual behavior on six apps, some targeting minors.",
                "America loves pickup trucks. Can Elon Musk win drivers over with a Tesla ‘Cybertruck’?"]
            }
        ],

    };

}



getData() {
    database = firebase.database();
    var ref = database.ref('cards'); //the root of the db
   let upState = this
    ref.on('value', function(data){
            console.log("keep stat"+upState 
            )
           upState.setState({
                objectsArray: data.val()
            })

    }); // what to do with data
}

 gotData(data){
    objectsArray = data.val(); // the array of cards
    var cardItems = Object.keys(objectsArray); //  each card object in the array
    
    for ( var i=0; i < cardItems.length; i++){
        var k = cardItems[i];
        theTopic = objectsArray[k].title;

        var links = objectsArray[k].data; // the link array object
        for ( var j =0; j < links.length; j++){
            econArr=[];
            intArr=[];
            var x = links[j]; // the link
        }
        // console.log(topic)  
    }
    }



errData(err){
    console.log('Error!');
    console.log(err); 
}

componentWillMount(){
    this.getData();
}

onPressAbout = () => {
    this.props.navigation.navigate('About')
    }


render() {

return (
    <ScrollView >

        <View style={styles.container}>
            <View >
                <View style={{ display: 'flex', flexDirection:'row'}}>
                        <Text style={styles.header}> {this.state.title}</Text>
                </View>
                <View style={styles.stocks}>
                    <Text style={{fontSize:15, marginBottom:10, textAlign:'center'}}> {this.state.updated}</Text>
                    <Text style={{fontSize:15, marginBottom:10, textAlign:'center'}}> {this.state.stocks}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={this.onPressAbout} style={{right:10, top:8, position:'absolute', height: 25, width:25}}>
                        <Image source={sidebar} style={{   width: '100%',height:'100%',}} />
            </TouchableOpacity>
        </View>

        <View style={styles.sectionView}>
            {console.log("in render" + this.state.objectsArray)}
            {this.state.objectsArray !== null ? (
                <SectionList
                sections={this.state.objectsArray}
                renderItem={({item}) => 
                <Text style={styles.item} onPress={() => Linking.openURL('https://www.cnn.com/2019/11/12/business/apple-card-gender-bias/index.html')}>
                    {item}
                </Text>}
                renderSectionHeader={
                    ({section}) => 
                    <Text style={styles.sectionHeader}>
                        {section.title}
                    </Text>
                    }
                keyExtractor={(item, index) => index}
                />
            ) : (<View/>)}
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
        fontFamily:'AmericanTypewriter',
    },
    sectionView: {
        flex: 1,
        paddingTop: 22,
    },

    item: {
        padding: 10,
        fontSize: 18,
        textAlign:'center',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        backgroundColor: '#AFEEEE',
        
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
    },
    stocks:{
        marginTop: 10,
        paddingTop: 10,
        borderRadius:20,
        borderColor:'grey',
        borderWidth: 1,
        width: 400,

    }
});