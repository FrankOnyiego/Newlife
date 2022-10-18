import React, { useEffect} from "react"
import{View, Text, SafeAreaView, ScrollView, Dimensions} from "react-native"
import {WebView} from 'react-native-webview';

function App() {
  return (
    <ScrollView style={{marginTop: 40}}>
      <View>
      <Text style={{
        fontWeight: 'bold',
        backgroundColor: '#e3f0e1',
        padding: 15,
        textAlign: 'center'
      }}>NEWLIFE PREPARATORY SCHOOL</Text>
       <WebView source={{uri: 'https://cba.knec.ac.ke/'}} style={{
        	minWidth: Dimensions.get('window').width*0.1, 
          minHeight: Dimensions.get('window').height*10,
          originWhitelist: ['*']
       }} />
       <Text style={{
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#e3f0e1',
        padding: 10
       }}>Developed by franknyaboga8@gmail.com</Text>
       </View>
    </ScrollView>
  )
}
export default App

