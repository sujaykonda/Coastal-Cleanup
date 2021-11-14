import React from "react"
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity } from "react-native";
import UploadImage from "./UploadImage";

class ReportPollutionForm extends Component {
  render = () => {
    return (
      <View style={styles.centeredView}>
        <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
          <View style={styles.box1View}>
            <View style={styles.form}>
              <form>
                <Text style={styles.Text1}>Location:    </Text>
                <input
                  name="Location"
                  type="string"
                  value={this.state}
                  onChange={this.handleInputChange} />
              </form>
            </View>

            <View style={styles.form}>
              <form>
                <Text style={styles.Text2}>Email:    </Text>
                <input
                  name="Email"
                  type="string"
                  value={this.state}
                  onChange={this.handleInputChange} />
              </form>
            </View>

            <Text style={styles.Text3}>Picture:</Text>
            <UploadImage style={styles.ImagePlace} />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Text3: {
    color: "white",
    fontSize: "150%",
    opacity: "100%",
    textAlign: "center",
    marginTop: '10%'
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
  },

  Text1: {
    color: "white",
    fontSize: "150%",
    opacity: "100%",
    flex: 1,
    textAlign: 'left',
  },
  Text2: {
    color: "white",
    fontSize: "150%",
    opacity: "100%",
    flex: 1,
    textAlign: 'left',
  },
  form: {
    margin: "20%",
    marginTop: "5%",
  }
});
export default ReportPollutionForm
