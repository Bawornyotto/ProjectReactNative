import { View, Text,Button,StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from "../components/Styles";

const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{flex:1}}>
       <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>Home Screen</Text>
          <Button
            title="Go to Setting Screen"
            onPress={() => navigation.navigate("SettingScreen")}
          />
          <Button
            title="Open News Screen"
            onPress={() => navigation.navigate("")}
          />
          
        </View>

        <Text style={styles.textBottomStyle}>
          www.tni.ac.th
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;
