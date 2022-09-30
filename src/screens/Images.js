import React, { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Images = () => {

    /* https://enappd.com/blog/pick-images-from-camera-gallery-in-react-native-app/78/ Image picker */
    const [image, setImage] = useState('https://via.placeholder.com/200')

    const selectImage = () => {

        const options = {
            title: 'Selecciona Una Imagen',
            /* customButtons: [
                { name: 'customOptionKey', title: 'Selecciona una Imagen' },
            ], */
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }

        launchImageLibrary(options, response => {
            console.log("Response =>", response);

            if (response.errorMessage) {
                console.log("Ocurrio un error: ", response.errorMessage);
            } else if (response.didCancel) {
                console.log('Usuario Cancelo selección');
            } else {
                const path = response.assets[0].uri;

                setImage(path);
            }
        })
    }

    const tomarFoto = () => {
        const options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchCamera(options, response => {
            console.log("REPONSE ===> ", response);

            if (response.errorMessage) {
                console.log("Ocurrio un error: ", response.errorMessage);
            } else if (response.didCancel) {
                console.log('Usuario Cancelo Take a photo');
            } else {
                const path = response.assets[0].uri;

                setImage(path);
            }
        })
    }

    return (
        <View>
            <Image
                style={{
                    alignSelf: 'center',
                    width: 200,
                    height: 200,
                    bottom: 50,
                    borderRadius: 5
                }}

                source={{ uri: image }}
            />

            <Pressable style={styles.button} onPress={selectImage}>
                <Text style={styles.text}>Seleccionar Foto</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={tomarFoto}>
                <Text style={styles.text}>Tomar Foto</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#154360',
        marginTop: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default Images;