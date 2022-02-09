import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../components/Styles";

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>Setting Screen</Text>
          <Button
            title="Go to Home Screen"
            onPress={() => navigation.navigate("HomeScreen")}
          />
          <Button
            title="Open News Screen"
            onPress={() => navigation.navigate("")}
          />
          <Button
            title="Open Profile Screen"
            onPress={() => navigation.navigate("ProfileScreen")}

          />
        </View>

        <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
      </View>
    </SafeAreaView>
  )
}
export default SettingScreen;
