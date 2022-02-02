import { Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../components/Styles";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./Logo";

const FirstPage = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:()=><Logo/>,
      headerRight: () => (
        <Button onPress={() => alert('Test')} title="Register" />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={styles.container}>
          <Ionicons name="home" size={30} color="black" />
          <Text style={styles.textTopStyle}>This is the First Page</Text>
          <Button
            title="Go to Second Page"
            onPress={() => navigation.navigate("SecondPage")}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate("ThirdPage")}
          />
        </View>

        <Text style={styles.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
