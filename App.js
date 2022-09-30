import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Barcode from './src/screens/Barcode';
import Images from './src/screens/Images';

const App = () => {


  return (
    <GestureHandlerRootView style={{flex:1}}>

  {/*     <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Prueba de concepto </Text>
      </View>
 */}
      <Barcode />
    </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    //marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#154360',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  textHeader: {
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',

    color: '#FFF'
  },
  textButton: {
    color: "#000",
    fontSize: 19
  }
});

export default App;
