import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { styles } from "../components/Styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>You are on Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;