import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { View, Image, TouchableOpacity, Touchable } from "react-native";
import CustomSidebarMenu from "./pages/CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {
  //Structure for navigation Drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require("D:/projectReact/assets/drawerWhite.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#5f9ea0" },
        //Set Header text color
        headerTintColor: "#fff",
        //Set Header text style
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ title: "First Page" }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: { backgroundColor: "#5f9ea0" },
        //Set Header text color
        headerTintColor: "#fff",
        //Set Header text style
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: "Second Page" }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: "Third Page" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTinColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen name="FirstPage" component={firstScreenStack} />
        <Drawer.Screen name="SecondPage" component={secondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
