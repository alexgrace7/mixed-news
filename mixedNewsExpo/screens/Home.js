import React, { Component } from "react";
import {  StyleSheet, Text, View,  ScrollView, Image, TouchableOpacity,  Linking} from "react-native";
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
    link1:"https://www.cnn.com/2019/12/02/asia/us-military-hong-kong-intl-hnk-scli/index.html",
    header1:" 🔵 China Hits The US With A Military Ban",
    link2:"https://www.foxnews.com/world/iran-state-run-tv-security-forces-shot-killed-rioters-gas-price-protests",
    header2:" 🔴 Iran Security Forces Kill Protesters",
    link3:"https://www.cnn.com/2019/12/03/europe/greta-thunberg-lisbon-cop25-intl-scli/index.html",
    header3:" 🔵 Thunberg Arrives In Lisbon",
    link4:"https://www.foxnews.com/politics/trump-emmanuel-macron-nato-france-needs-alliance-brain-dead",
    header4:" 🔴 Trump And Macron Have Tense Meeting Regarding Isis"
    },

    { id: "2",
     topic: "📈 Economy 📈",
     link1:"https://www.cnn.com/2019/12/03/business/ak-steel-cleveland-cliff-deal/index.html",
    header1:" 🔵 US Steel Company Selling For 1/2 Its Value From When Trump Took Office",
    link2:"https://www.foxbusiness.com/markets/rio-tinto-plowing-1-5b-into-kennecott-copper-mine-exclusive",
    header2:" 🔴 International Company Invests 1.5B Into American Mining",
    link3:"https://www.washingtonpost.com/us-policy/2019/12/03/trump-says-trade-deal-with-china-could-wait-until-after-election/",
    header3:" 🔵 DOW Drops 400 Points After This Trump Announcement",
    link4:"https://www.foxbusiness.com/markets/mike-pence-interview-trump-economy-trade",
    header4:" 🔴 Trump Uses Economy's Strength As Trade Talk Leverage" 
    },

    { id: "3", 
    topic: "💻 Tech 💻",
    link1:"https://www.bbc.com/news/science-environment-50644545",
    header1:" 🔵 Artificial Neurons Developed To Fight Disease",
    link2:"https://www.breitbart.com/tech/2019/12/03/tech-watchdog-google-facebook-engage-in-one-way-mirror-surveillance/",
    header2:" 🔴 Google/Facebook Engage In One Way Surveilance",
    link3:"https://www.bbc.com/future/article/20191129-what-will-an-ice-free-arctic-look-like",
    header3:" 🔵 The Search For Life At The North Pole",
    link4:"https://www.breitbart.com/tech/2019/12/03/lawsuit-tiktok-sent-user-data-of-americans-to-china/",
    header4:" 🔴 Tik Tok Sends American Data To China"
    },

    { id: "4", 
    topic: "💵 Business 💵",
    link1:"https://www.bbc.com/news/business-50636521",
    header1:" 🔵 US mulls retaliation to French tech tax",
    link2:"https://www.wsj.com/articles/sprint-overcounted-low-income-customers-for-years-11575374400?mod=business_lead_pos1",
    header2:" 🔴 Sprint Has Over Counted Low Income Families For Years",
    link3:"http://realestate.boston.com/renting/2019/12/02/rent-two-bedroom-boston-rises/?s_campaign=bdc:hp:well:realestate",
    header3:" 🔵 Rent Increases 8.5% In Boston",
    link4:"https://markets.businessinsider.com/news/stocks/list-of-french-products-impacted-possibly-by-tariffs-trump-administration-2019-12-1028735058",
    header4:" 🔴 List Of French Products Trump May Tax"
 },
    { id: "5", 
    topic: "👤 Social 👤", 
    link1:"https://www.cnn.com/2019/12/03/entertainment/brad-pitt-interview-anthony-hopkins-interview-magazine/index.html",
    header1:" 🔵 Brad Pitt Cries More Than He Used To",
    link2:"https://www.wsj.com/articles/found-womens-jeans-that-wont-go-out-of-style-11575127977",
    header2:" 🔴 Women's Jeans That Don't Go Out of Style",
    link3:"https://www.cnn.com/2019/12/03/entertainment/black-widow-trailer-teaser/index.html",
    header3:" 🔵 First 'Black Widow' Trailer Is Out",
    link4:"https://www.foxnews.com/auto/top-gear-america-dax-shepard-rob-corddry",
    header4:" 🔴 Top Gear America Is Returning"
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

onPressWeather = () => {
    this.props.navigation.navigate('Weather')
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
                    <Text style= {styles.cardTopic}> {item.topic} </Text>
                    <View style= {{marginTop: 15}}>
                        <Text style={styles.articleHeader} onPress={() => Linking.openURL(item.link1)}>
                            {item.header1}
                        </Text>
                        <Text style={styles.articleHeader} onPress={() => Linking.openURL(item.link2)}>
                            {item.header2}
                        </Text>
                        <Text style={styles.articleHeader} onPress={() => Linking.openURL(item.link3)}>
                            {item.header3}
                        </Text>
                        <Text style={styles.articleHeader} onPress={() => Linking.openURL(item.link4)}>
                            {item.header4}
                        </Text>
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
                        <Text style={{color:'#00FFFF', fontSize: 40}}> WELL
                            <Text style={{color:'red', fontSize: 40}}> BALANCED</Text>
                        </Text>
                    </Text>
                </View>
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
                <TouchableOpacity onPress={this.onPressWeather} >
                     <Text style={styles.footerElement}>YOUR WEATHER REPORT</Text>
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
