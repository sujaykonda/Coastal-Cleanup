import React from "react"
import util from 'util'
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity, ScrollView } from "react-native";

class PollutionFeed extends Component {
    state = { location: null }
    constructor() {
        super()
        navigator.geolocation.getCurrentPosition((l) => {
            console.log(l);
            this.setState({ location: l })
        }, () => {
            alert("Without location, we cannot generate a feed for you")
        })
    }
    render = () => {
        const { location } = this.state;
        var feed = [];
        if (location != null) {
            // generate the feed
            // get from the database
            // sort by nearest location
            // add pictures and location in text to the feed
        }
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
