import React from "react"
import { Component } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, View, ImageBackground, Button, TouchableOpacity} from "react-native";
import UploadImage from "./UploadImage";

class ReportPollutionForm extends Component{
    render = ()=> {
        return (
            <View style={styles.centeredView}>
                <ImageBackground source={require("./assets/background.png")} resizeMode="stretch" style={styles.backgroundImage}>
                    <View style={styles.box1View}>
                        <View style={styles.form}>
                        <form>
                            <Text style={styles.Text1}>Location:</Text>
                            <input
                                name="Location"
                                type="string"
                                value={this.state}
                                onChange={this.handleInputChange} />
                        </form>
                        </View>

                    <View style={styles.form}>
                        <form>
                            <Text style={styles.Text2}>Email:</Text>
                            <input
                                name="Email"
                                type="string"
                                value={this.state}
                                onChange={this.handleInputChange} />
                        </form>
                        </View>
                    </View>

                    <View style={styles.box2View}>
                      <Text style={styles.Text1}>Picture:</Text>
                      <UploadImage/>
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
      Text1: {
        color:"white",
        fontSize:"125%" ,
        opacity:"100%",
        flex:1,
        textAlign:'left',
      },
      Text2: {
        color:"white",
        fontSize:"125%" ,
        opacity:"100%",
        flex:1,
        marginTop: "-10%",
        textAlign:'left',
      },
      form: {
        margin: "5%",
        marginTop: "10%",
      }
});
export default ReportPollutionForm
