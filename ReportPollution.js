import React from 'react'
import { Component } from "react"
import { StyleSheet, Alert, Modal, View } from "react-native"

export default class ReportPollution extends Component{
    render = () => {
        return (
            <Modal 
                animationType="slide" 
                transparent={true} 
                visible={this.props.visible}
                onRequestClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <View style={styles.background}/>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#282C34",
        width: '100%',
        height: '100%'
    }
})