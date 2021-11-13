import React from "react"
import { Component } from "react"

class ReportPollutionForm extends Component{
    render = ()=> {
        return (
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
        )
    }
}
export default ReportPollutionForm
