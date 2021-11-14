import React from "react"
import util from 'util'
import { Component } from "react"
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";
import FirebaseInfo from "./FirebaseHandler";
import { collection, getDocs } from 'firebase/firestore/lite';

class PollutionFeed extends Component {
    state = { feed: [] }
    constructor() {
        super()
        navigator.geolocation.getCurrentPosition((l) => {
            const lat = l.coords.latitude;
            const long = l.coords.longitude;
            getDocs(collection(FirebaseInfo.db, "formresults")).then((query) => {
                var feed = []
                query.docs.forEach((doc) => {
                    const lat2 = doc.data()["lat"];
                    const long2 = doc.data()["long"];
                    const distance = (lat - lat2) * (lat - lat2) + (long - long2) * (long - long2);
                    if (distance < 15) {
                        const photo = doc.data().photo;
                        feed.push(
                            <View style={styles.boxView}>
                                <View style={{opacity:'100%'}}>
                                    <Image key={"photo" + doc.id} source={{ uri: photo }} style={styles.pic} />
                                    <Text key={"address" +doc.id} style={styles.txt} >{doc.data().address} </Text>
                                    <Text key={"email" + doc.id} style= {styles.txt1}>{doc.data().email}</Text>
                                    <Text key={"description" + doc.id} style={styles.txt}>{doc.data().description}</Text>
                                </View>
                            </View>
                            // <View>
                                
                            //     <Image key={"photo" + doc.id} source={{ uri: photo }} style={{ width: 200, height: 200 }} />
                            //     <Text key={"address" + doc.id}>{doc.data().address}</Text>
                            //     <Text key={"description" + doc.id}>{doc.data().description}</Text>
                            // </View>
                        )
                    }
                })
                this.setState({ feed: feed });
            })
        }, () => {
            alert("Without location, we cannot generate a feed for you")
        })
    }
    render = () => {
        const { feed } = this.state;
        console.log(feed);
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
                    <ScrollView>
                        {feed}
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    pic: {
        width:250,
        height:150,
        borderRadius:40,
        margin:'10%',
        opacity:'100%'
    },
    boxView: {
        marginTop: '10%',
        width: 300 ,
        height:  400,
        borderRadius: 50,
        backgroundColor: "#2100C3",
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(33,0,195,0.5)'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    txt: {
        fontSize: 20,
        marginTop: "10%",
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        color: "white"
    },
    txt1: {
        fontSize: 20,
        marginTop: "6%",
        alignItems: 'center',
        alignContent:'center',
        textAlign:'center',
        color: "white"
    },
})

export default PollutionFeed
