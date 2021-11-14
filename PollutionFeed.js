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
                            <View>
                                <Image key={"photo" + doc.id} source={{ uri: photo }} style={{ width: 200, height: 200 }} />
                                <Text key={"address" + doc.id}>{doc.data().address}</Text>
                                <Text key={"description" + doc.id}>{doc.data().description}</Text>
                            </View>
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
    backgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: "flex-start",
        alignItems: "center",
    },
})

export default PollutionFeed
