import React, { useState } from "react"
// import util from 'util'
import { Component } from "react"
import { StyleSheet, Text, View, ImageBackground, Pressable, Image, ScrollView } from "react-native";
import FirebaseInfo from "./FirebaseHandler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Modal, TouchableOpacity } from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';

class PollutionFeed extends Component {
    state = { feed: [] }

    constructor(props) {
        super(props)


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

                            <View key={"view1" + doc.id} style={styles.boxView}>

                                <View key={"view2" + doc.id} style={{ opacity: '100%' }}>

                                    {/* <Modal visible={modalOpen}>
                                        <View style={StyleSheet.modalContent}>
                                            <MaterialIcons
                                            name = 'close'
                                            size={24}
                                            onPress={() => setModalOpen(false)}
                                        />
                                        </View>
                                    </Modal> */}

                                    {/* Reg info for the user to see*/}
                                    <Image key={"photo" + doc.id} source={{ uri: photo }} style={styles.pic} />
                                    <Text key={"address" + doc.id} style={styles.txt} >{doc.data().address} </Text>
                                    <Text key={"email" + doc.id} style={styles.txt1}>{doc.data().email}</Text>
                                    <Text key={"description" + doc.id} style={styles.txt}>{doc.data().description}</Text>
                                    <View Style={styles.buttonContainer}>
                                        <TouchableOpacity title="Details" onPress={() => { props.onDetailsOpen(doc.id) }} style={styles.button} activeOpacity={0.8}>
                                            <Text style={styles.mainButtonText}>Details</Text>
                                        </TouchableOpacity>
                                    </View>
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
                    <Pressable style={styles.xCon} onPress={() => { this.props.onClose() }} hitSlop={1000}>
                        <Icon name={'close'} color={'white'} size={50} style={{ opacity: 1 }} />
                    </Pressable>
                    <View style={{ margin: 10 }}></View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {feed}
                    </ScrollView>
                    <View style={{ marginBottom: 20 }}></View>
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
})

export default PollutionFeed
