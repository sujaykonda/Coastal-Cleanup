import React, { useState } from "react"
// import util from 'util'
import { Component } from "react"
import { StyleSheet, Text, View, ImageBackground, Pressable, Image, ScrollView, Dimensions } from "react-native";
import FirebaseInfo from "./FirebaseHandler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Modal, TouchableOpacity } from "react-native-web";

class PollutionDetails extends Component {

    constructor(props) {
        super(props)
    }
    render = () => {
          {/* <div>{this.props.docid}</div> */} // use this later
        return (
            
            // <View style={styles.container}>
            //     <MapView style={styles.map} />
            // </View>
            <View style={styles.centeredView}>
                
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
                    <Pressable style={styles.xCon} onPress={() => { this.props.onClose() }} hitSlop={1000}>
                        <Icon name={'close'} color={'white'} size={50} style={{ opacity: 1 }} />
                    </Pressable>

                   

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
    xCon: {
        alignItems: "center",
        marginTop: "3%",
        width: 66,
        height: 58,
        color: "white",
        opacity: "100%",
        position: 'absolute',
        marginLeft: '-85%'
    },
    pic: {
        width: 250,
        height: 150,
        borderRadius: 40,
        marginTop: 20,
        margin: 'auto',
        opacity: '100%'
    },
    boxView: {
        marginTop: '10%',
        width: 300,
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: "#2100C3",
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
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
        marginTop: "5%",
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: "white"
    },
    txt1: {
        fontSize: 20,
        marginTop: "6%",
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        color: "white"
    },
    mainButtonText: {
        color: "white",
        fontSize: 17,
        opacity: "100%",
        flex: 1,
        margin: 20,
        textAlign: 'center',
    },
    button: {
        width: 70,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#362e2e",
        opacity: "72%",
        marginTop: 20,
        marginLeft: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default PollutionDetails
