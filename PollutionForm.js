import React from "react"
import { Component, useState, useEffect } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { collection, addDoc } from 'firebase/firestore/lite';
import FirebaseInfo from "./FirebaseHandler";

import * as ImagePicker from 'expo-image-picker';
class PollutionForm extends Component {
    state = { address: "", lat: 0, long: 0, email: "", description: "", photo: "" }
    constructor() {
        super()
        navigator.geolocation.getCurrentPosition((l) => {
            console.log(l);
            var state = this.state;
            state.lat = l.coords.latitude
            state.long = l.coords.longitude
            this.setState(state)
            fetch("http://api.positionstack.com/v1/reverse?access_key=dddbe44ef06217ddee31c66082f09941&query=" + this.state.lat + "," + this.state.long).then((responce) => {
                responce.json().then((json) => {
                    var state = this.state;
                    console.log(json.data);
                    console.log(json.data[0].label)
                    state.address = json.data[0].label
                    this.setState(state)
                })
            })
        })
    }

    addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!_image.cancelled) {
            this.set("photo", _image.uri);
        }
    }

    checkForCameraRollPermission = async () => {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Please grant camera roll permissions inside your system's settings");
        } else {
            console.log('Media Permissions are granted')
        }
    }

    set(x, y) {
        var state = this.state;
        state[x] = y;
        this.setState(state);
    }

    onSubmit() {
        const { address, lat, long, email, description, photo } = this.state;
        if (address == "" || email == "" || description == "" || !photo) {
            return;
        }
        addDoc(collection(FirebaseInfo.db, "formresults"), { address: address, lat: lat, long: long, email: email, description: description, photo: photo })
        this.props.onClose();
    }
    render = () => {

        //useEffect(() => {
        //    checkForCameraRollPermission()
        //}, []);
        const { address, lat, long, email, description, photo } = this.state;
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
                    <View style={styles.box1View}>
                        <Pressable style={styles.xCon} onPress={() => { this.props.onClose() }}>
                            <Icon name={'close'} color={'white'} size={50} style={{ opacity: 1 }} />
                        </Pressable>
                        <Text style={styles.Text1} >Your Email</Text>
                        <TextInput style={styles.txInput} keyboardType="email-address" defaultValue={email} onChangeText={text => this.set("email", text)} />
                        <Text style={styles.Text1} >Location</Text>
                        <TextInput style={styles.txInput} defaultValue={address} onChangeText={text => this.set("address", text)} />
                        <Text style={styles.Text1} >Description</Text>
                        <TextInput style={styles.txInputLarge} multiline={true} defaultValue={description} onChangeText={text => this.set("description", text)} ></TextInput>
                        <View style={imageUploaderStyles.container}>
                            <TouchableOpacity onPress={this.addImage} style={imageUploaderStyles.uploadBtn} >
                                {
                                    !!photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
                                }
                                <Text>
                                    <Text style={imageUploaderStyles.Txt1}>  Upload Photo </Text>
                                    <Text style={imageUploaderStyles.logo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="17 8 12 3 7 8"></polyline>
                                            <line x1="12" y1="3" x2="12" y2="15"></line>
                                        </svg>
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Button title={"submit"} styles={styles.submitButton} onPress={() => this.onSubmit()} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    xCon: {
        alignItems: "center",
        marginTop: "7%",
        width: 66,
        height: 58,
        color: "white",
        opacity: "100%",
        position: 'absolute',
        marginLeft: '-70%'
    },
    submitButton: {
        paddingTop: 30,
        flex: 1,
        margin:"10%",
        backgroundColor:"white"
    },
    upload: {
        paddingTop: 80,
        flex: 2,
    },
    txInputLarge: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#546FFF",
        width: "60%",
        height: '20%',
        opacity: "76%",
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        textAlignVertical: 'top',
        paddingTop: 10,

    },
    txInput: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#546FFF",
        width: "60%",
        height: '7%',
        opacity: "76%",
        color: 'white',
        fontSize: 20
    },
    ImagePlace: {
        paddingTop: 90
    },
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
        height: '90%',
        borderRadius: 50,
        backgroundColor: "#2100C3",
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: "center",
        opacity: '71%'
    },
    Text1: {
        fontSize: 25,
        color: "white",
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20
    }
});

const imageUploaderStyles = StyleSheet.create({
    container: {
        height: 150,
        width: 200,
        backgroundColor: "#546FFF",
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 30,
        flexDirection: "row"
    },
    logo: {
        alignItems: "center",
        marginTop: "26%",
        color: "white"
    },
    Txt1: {
        fontSize: 22,
        marginTop: "18%",
        alignItems: 'center',
        color: "white"


    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    logo: {
        width: 66,
        height: 58,
    }
})
export default PollutionForm
