import React from "react"
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity, TextInput } from "react-native";
import UploadImage from "./UploadImage";

class ReportPollutionForm extends Component {
  render = () => {
    return (
      <View style={styles.centeredView}>
        <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
          <View style={styles.box1View}>
            <Text style={styles.Text1}>Your Email</Text>
            <TextInput  style={styles.txInput}  keyboardType="email-address"  />
            <Text style={styles.Text1} >Location</Text>
            <TextInput  style={styles.txInput}/>
            <Text style={styles.Text1}> Description</Text>
            <TextInput style={styles.txInputLarge} multiline={true}></TextInput>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txInputLarge: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor:"#546FFF",
    width:"60%",
    height:'20%',
    opacity:"76%",
    color:'white',
    fontSize:20,
    textAlign:'left',
    textAlignVertical:'top',
    paddingTop: 10,
    paddingBottom: 0,
    
  },
  txInput:{
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor:"#546FFF",
    width:"60%",
    height:'7%',
    opacity:"76%",
    color:'white',
    fontSize:20
  },
  ImagePlace: {
    paddingTop: 100
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
    flexDirection:'column',
    alignContent:'center',
    alignItems:"center",
    opacity:'71%'
  },
  Text1: {
    fontSize:25,
    color:"white",
    textAlign:'center',
    marginTop:30,
    marginBottom: 20
  }
});
export default ReportPollutionForm
