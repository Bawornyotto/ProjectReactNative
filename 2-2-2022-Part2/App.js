import { View, Text, Image } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import ProfileScreen from "./screens/ProfileScreen";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function firstScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5f9ea0",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5f9ea0",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: "Setting Screen" }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile Screen" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? logo1 : logo2;
            } else if (route.name === "SettingScreen") {
              iconName = focused ? logo1 : logo3;
            }
            return (
              <Image
                source={iconName}
                color={color}
                style={{ width: 20, height: 20 }}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#5f9ea0",
          inactiveTinrColor: "#cccccc",
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={firstScreenStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SecondScreenStack}
          options={{ title: "Setting" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
