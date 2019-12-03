import React, { Component } from "react";
import {  StyleSheet, Text, View,  ScrollView, Image, TouchableOpacity,  } from "react-native";
import * as firebase from 'firebase';
import config from '../config.js'
import { Dimensions } from 'react-native';
import whitehouse from '../assets/whitehousehome.jpg';
import RNShake from 'react-native-shake';



if (!firebase.apps.length){
    firebase.initializeApp(config);
    }

const { width } = Dimensions.get('window');

const Users = [
    { id: "1", 
    topic: "🌎 World 🌎",
    link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.bbc.com/news/education-50590581",
    header2:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests",
    link3:"https://www.bbc.com/news/business-50636521",
    header3:" 🔵 US mulls retaliation to French tech tax",
    link4:"https://www.bbc.com/news/education-50590581",
    header4:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests"
    },

    { id: "2",
     topic: "📈 Economy 📈",
     link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.bbc.com/news/education-50590581",
    header2:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests",
    link3:"https://www.bbc.com/news/business-50636521",
    header3:" 🔵 US mulls retaliation to French tech tax",
    link4:"https://www.bbc.com/news/education-50590581",
    header4:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests" 
    },

    { id: "3", 
    topic: "💻 Technology 💻",
    link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.bbc.com/news/education-50590581",
    header2:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests",
    link3:"https://www.bbc.com/news/business-50636521",
    header3:" 🔵 US mulls retaliation to French tech tax",
    link4:"https://www.bbc.com/news/education-50590581",
    header4:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests"
    },

    { id: "4", 
    topic: "💵 Business 💵",
    link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.bbc.com/news/education-50590581",
    header2:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests",
    link3:"https://www.bbc.com/news/business-50636521",
    header3:" 🔵 US mulls retaliation to French tech tax",
    link4:"https://www.bbc.com/news/education-50590581",
    header4:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests"
 },
    { id: "5", 
    topic: "👤 Social 👤", 
    link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.bbc.com/news/education-50590581",
    header2:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests",
    link3:"https://www.bbc.com/news/business-50636521",
    header3:" 🔵 US mulls retaliation to French tech tax",
    link4:"https://www.bbc.com/news/education-50590581",
    header4:" 🔴 Pisa rankings: Why Estonian pupils shine in global tests"
},
  ]

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
        linksArray: null,
        topicsArray: null,
       
    };

}



getData() {
    database = firebase.database();
    var ref = database.ref('cards'); //the root of the db
   let upState = this
    ref.on('value', function(data){
            allObjects = data.val(); // the array of cards
            cardItems = Object.keys(allObjects); //  each card object index in the array
            topicsArr = []
            linksArr = []
            for ( var i=0; i < cardItems.length; i++){
                k = cardItems[i];
                theTopic = allObjects[k].title; // the topic headers 
                topicsArr.push(theTopic);
                links = allObjects[k].data; // the link array object
                linksArr.push(links)

            }
            console.log("cardItems:" + cardItems)
            console.log("keep stat"+upState)
            console.log("topicsArray: " + topicsArr)
            
           upState.setState({
                objectsArray: allObjects,
                linksArray: linksArr,
                topicsArray: topicsArr,
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
       
        // console.log(topic)  
    }
    }



errData(err){
    console.log('Error!');
    console.log(err); 
}

componentWillMount(){
    this.getData();
    RNShake.addEventListener('ShakeEvent', () => {
        console.log("SHAKING");
        this.props.navigation.navigate('Login')

    });
}

componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }

componentDidMount() {
    setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
}

onPressAbout = () => {
    this.props.navigation.navigate('About')
    }

renderCards = () => {
    return Users.map((item,i) => {
        console.log("render Cards function: " + this.state.objectsArray)
        if (this.state.objectsArray == null){
            return null;
        }
        else {
            return(
                <ScrollView style={styles.view} key={item.id}>
                    <Text 
                        style= {styles.cardTopic}
                    >
                         {item.topic}
                    </Text>
                    <View style= {{marginTop: 15}}>
                        <Text style={styles.articleHeader}> {item.header1}</Text>
                        <Text style={styles.articleHeader}> {item.header2}</Text>
                        <Text style={styles.articleHeader}> {item.header3}</Text>
                        <Text style={styles.articleHeader}> {item.header4}</Text>
                    </View>
                </ScrollView> 
            )
        }
    })
}


render() {

return (
    <ScrollView contentContainerStyle={styles.mainContainer} >
        <Image source = {whitehouse} style={styles.background}></Image>

        <View style={styles.container}>
            <View >
                <View style={{ display: 'flex', flexDirection:'row'}}>
                    <Text style={styles.welcome}>
                        <Text style={{color:'#00FFFF', fontSize: 45}}> WELL
                            <Text style={{color:'red', fontSize: 45}}> BALANCED</Text>
                        </Text>
                    </Text>
                </View>
                {/* <View style={styles.stocks}>
                    <Text style={{fontSize:15, marginBottom:10, textAlign:'center'}}> {this.state.updated}</Text>
                    <Text style={{fontSize:15, marginBottom:10, textAlign:'center'}}> {this.state.stocks}</Text>
                </View> */}
            </View>
        </View>

            <ScrollView 
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.container}
                //pagingEnabled={true}
                horizontal= {true}
                decelerationRate={0}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
                }}
            >
            {this.renderCards()}

            {console.log("in render" + this.state.objectsArray)}
            {this.state.objectsArray !== null ?  (

                     <View style={styles.view} />
            ) 

            : (<View/>)}
                
            </ScrollView>

            <View style={styles.footer}> 
                <TouchableOpacity onPress={this.onPressAbout} >
                     <Text style={styles.footerElement}>ABOUT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressAbout} >
                     <Text style={styles.footerElement}>YOUR PERSONAL NEWS</Text>
                </TouchableOpacity>
            </View>


    </ScrollView>
    );
    }
}

export default Home;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'space-between',
      textAlign:'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      height:"100%",


    },
    header:{
        marginTop: 4,
        color:'white',
        textAlign:'center',
        fontSize: 40,
        fontFamily:"Futura-Medium",
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
    
    stocks:{
        marginTop: 10,
        paddingTop: 10,
        borderRadius:20,
        borderColor:'grey',
        borderWidth: 1,
        width: 400,
    },
    container: {},
        view: {
            marginTop: 50,
            backgroundColor: 'rgba(0, 116, 217, 0.4)',
            width: width - 80,
            margin: 10,
            height: '70%',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#d6d7da',
        },
    cardTopic: {
        marginTop: 10,
        color: 'white',
        textAlign:'center',
        fontSize: 25,
        letterSpacing: 4,
        fontFamily:"Futura-Medium",
        textTransform:"uppercase",
    },
    articleHeader: {
        color: 'white',
        marginTop: 30,
        fontFamily:"Futura-Medium",
        fontSize: 20,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
    },
    background:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.2
      },
    footer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        borderWidth: 1,
        borderColor:'white',
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 116, 217, 0.4)',
    },
    footerElement: {
        marginLeft: 20, 
        marginRight: 20,
        color: 'white',
        fontSize: 20,
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

});