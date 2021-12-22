import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator
                initalRouteName='Home'
                      screenOptions={{
                        headerStyle: {
                          backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },}}>
                    <Stack.Screen name="Home" component={HomeScreen} 
                    options={{title:'หน้าหลัก'}}/>
                    <Stack.Screen name="About" component={AboutScreen} 
                    options={{title:'เกี่ยวกับ'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
}

export default App
