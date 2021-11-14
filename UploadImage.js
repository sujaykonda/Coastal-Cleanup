import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Please grant camera roll permissions inside your system's settings");
    } else {
      console.log('Media Permissions are granted')
    }
  }

  useEffect(() => {
    checkForCameraRollPermission()
  }, []);

  return (
    <View style={imageUploaderStyles.container}>


      <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
        <Text>
          <Text style={imageUploaderStyles.Txt1} >   Upload Photo</Text> <Text style={imageUploaderStyles.logo}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></Text>
        </Text>
      </TouchableOpacity>
    </View>



  );
}

const imageUploaderStyles = StyleSheet.create({
  container: {
    height: 70,
    width: 200,
    backgroundColor: "#546FFF",
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: "20%",
    flexDirection: "row"
  },
  logo: {
    alignItems: "center",
    marginTop: "10%",
    color: "white"
  },
  Txt1: {
    fontSize: 24,
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