import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import PollutionFeed from "./PollutionFeed";
import PollutionForm from "./PollutionForm";
import PollutionDetails from "./PollutionDetails"
// Initialize Firebase
class App extends Component {
    state = {
        formModalVisible: false,
        mapModalVisible: false,
        detailsModalVisible: false,
        docid: ""
    };

    setVisible = (f, m, d) => {
        this.setState({ formModalVisible: f, mapModalVisible: m, detailsModalVisible: d, docid: this.state.docid });
    }

    setAll = (f, m, d, docid) => {
        this.setState({ formModalVisible: f, mapModalVisible: m, detailsModalVisible: d, docid: docid })
    }

    render() {
        const { formModalVisible, mapModalVisible, detailsModalVisible, docid } = this.state
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/beach-home-page.png")} resizeMode="stretch" style={styles.backgroundImage}>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={formModalVisible}
                    >
                        <PollutionForm onClose={() => { this.setVisible(false, false, false) }} />
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={mapModalVisible}
                    >
                        <PollutionFeed onDetailsOpen={(docid) => { this.setAll(false, false, true, docid); }}
                            onClose={() => { this.setVisible(false, false, false) }} />
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={detailsModalVisible}
                    >
                        <PollutionDetails docid={docid} onClose={() => { this.setVisible(false, false, false) }} />
                    </Modal>

                    <Text style={styles.largeText}>Together, we can do it!</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity title="File Pollution Report" style={styles.button} activeOpacity={0.8}
                            onPress={() => {
                                this.setVisible(true, false, false);
                            }}>
                            <Text style={styles.mainButtonText}>Report Pollution</Text>
                        </TouchableOpacity>
                        <TouchableOpacity title="Volunteer Sign Up" style={styles.button} activeOpacity={0.8}
                            onPress={() => {
                                this.setVisible(false, true, false);
                            }}>
                            <Text style={styles.mainButtonText}>Volunteer Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View Style={styles.buttonContainer}>
                        <TouchableOpacity title="Contact" style={styles.button2} activeOpacity={0.8}
                            onPress={() => {
                                //  this.setVisible(formModalVisible, true);
                                // create contact page and put here
                            }}>
                            <Text style={styles.mainButtonText}>Contact</Text>
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
    button2: {
        width: 120,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#211A1A",
        opacity: "72%",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
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