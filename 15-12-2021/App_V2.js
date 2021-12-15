import React from "react";
import { View, Text, Button } from 'react-native'
import Logo from "./components/Logo";
import Footer from "./components/Footer";
const App = ()=> {
    const showData = () => {
      alert('Hello world')
    }
  return(
    <View>
      <Footer/>
      <Text>Hello React Native</Text>
      <Text>สวัสดี React Native</Text>
      <Button title='Click' onPress={showData}/>
    </View>

  );
 }
 export default App;
