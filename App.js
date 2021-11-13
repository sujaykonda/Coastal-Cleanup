import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import ReportPollutionForm from "./ReportPollution";
class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  

  render() {
    const { modalVisible } = this.state
    return(
      <View style={styles.centeredView}>
        <ImageBackground source={require("./assets/beach-home-page.png")} resizeMode="stretch" style={styles.backgroundImage}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <ReportPollutionForm/>
        </Modal>
        <Text style={styles.largeText}>Together, we can do it!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity title = "File Pollution Report" style={styles.button} activeOpacity={0.8}
          onPress={() => {
            this.setModalVisible(!modalVisible)
          }}>
            <Text style={styles.mainButtonText}>Report Pollution</Text>
          </TouchableOpacity>
          <TouchableOpacity title = "Volunteer Sign Up" style={styles.button} activeOpacity={0.8}>
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
    color:"white",
    fontSize:20 ,
    opacity:"100%",
    flex:1,
    margin:20,
    textAlign:'center',
  },
  button: {
    width:120,
    height:90,
    borderRadius:5,
    backgroundColor:"#211A1A",
    opacity:"72%",
    marginLeft:20,
    marginRight:20,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainer: {
    flexDirection:'row',
    marginTop: 379
  },
  largeText: {
    margin:40,
    color:"black",
    fontSize: 40,
    textAlign:"center"
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