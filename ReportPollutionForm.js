import React from "react"
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";


class ReportPollutionForm extends Component{
    render = ()=> {
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
                    <View style={styles.box1View}>
                    <Text style={styles.Text}>Location:</Text>
                    </View>
                    <View style={styles.box2View}>

                    </View>
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
      box1View: {
        marginTop: '10%',
        width: '80%',
        height: '30%',
        borderRadius: 50,
        backgroundColor: "#2100C3",
      },
      box2View: {
        marginTop: '15%',
        width: '80%',
        height: '50%',
        borderRadius: 50,
        backgroundColor: "#2100C3",
      },
      Text: {
        color:"white",
        fontSize:"200%" ,
        opacity:"100%",
        flex:1,
        margin: "5%",
        textAlign:'left',
      },
});
export default ReportPollutionForm
