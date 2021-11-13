import React from "react"
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";

class PollutionMap extends Component{
    render = ()=> {
        return (  
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>

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

export default PollutionMap
