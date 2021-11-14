import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import PollutionFeed from "./PollutionFeed";
import PollutionForm from "./PollutionForm";
class App extends Component {
    state = {
        formModalVisible: false,
        mapModalVisible: false,
    };

    setVisible = (f, m) => {
        this.setState({ formModalVisible: f, mapModalVisible: m });
    }

    render() {
        const { formModalVisible, mapModalVisible } = this.state
        console.log(formModalVisible)
        console.log(mapModalVisible)
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/beach-home-page.png")} resizeMode="stretch" style={styles.backgroundImage}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={formModalVisible}
                        onRequestClose={() => {
                            this.setVisible(!formModalVisible, mapModalVisible)
                        }}
                    >
                        <PollutionForm onClose={() => { this.setVisible(!formModalVisible, mapModalVisible) }} />
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={mapModalVisible}
                        onRequestClose={() => {
                            this.setVisible(formModalVisible, !mapModalVisible);
                        }}
                    >
                        <PollutionFeed />
                    </Modal>

                    <Text style={styles.largeText}>Together, we can't do it!</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity title="File Pollution Report" style={styles.button} activeOpacity={0.8}
                            onPress={() => {
                                this.setVisible(true, mapModalVisible);
                                console.log(this.state);
                            }}>
                            <Text style={styles.mainButtonText}>Report Pollution</Text>
                        </TouchableOpacity>
                        <TouchableOpacity title="Volunteer Sign Up" style={styles.button} activeOpacity={0.8}
                            onPress={() => {
                                console.log("map modal on")
                                this.setVisible(formModalVisible, true);
                                console.log(this.state);
                            }}>
                            <Text style={styles.mainButtonText}>Volunteer Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainButtonText: {
        color: "white",
        fontSize: 20,
        opacity: "100%",
        flex: 1,
        margin: 20,
        textAlign: 'center',
    },
    button: {
        width: 120,
        height: 90,
        borderRadius: 5,
        backgroundColor: "#211A1A",
        opacity: "72%",
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 379
    },
    largeText: {
        margin: 40,
        color: "black",
        fontSize: 40,
        textAlign: "center"
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
});

export default App;