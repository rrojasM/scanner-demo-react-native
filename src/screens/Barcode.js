import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const Barcode = () => {

    const scanner = useRef(null);
    const [scan, setScan] = useState(false);
    const [result, setResult] = useState(null)


    useEffect(() => {
        setResult(null);
    }, [])

    const getData = e => {
        setResult(e);
        setScan(false);

        if (e.data.substring(0, 4) === 'http') {
            alert(e.data)
        }
    }
    return !scan ? (
        <View style={styles.container}>
            {result && <Text>Code: {JSON.stringify(result.data)}</Text>}
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(true)}>
                <Text style={styles.buttonText}>Iniciar Scanner</Text>
            </TouchableOpacity>
        </View>
    ) : (

        <QRCodeScanner
            onRead={getData}
            //flashMode={RNCamera.Constants.FlashMode.torch}
            ref={scanner}
            reactivate={true}
            showMarker={true}
            bottomContent={
                <>
                    {/* <TouchableOpacity style={styles.buttonTouchable} onPress={()=> scanner.current.reactivate()}>
                        <Text style={styles.buttonText}>Scanner</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
                        <Text style={styles.buttonText}>Detener Scanner</Text>
                    </TouchableOpacity>
                </>
            }
        />

    )
}

export default Barcode;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    /*  centerText: {
         flex: 1,
         fontSize: 18,
         padding: 32,
         color: '#777'
       },
       textBold: {
         fontWeight: '500',
         color: '#000'
       }, */
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }

});