import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="First"
          component={FirstPage}
          options={{
            title: 'First Page',
          }}
        />

        <Stack.Screen
          name="Second"
          component={SecondPage}
          options={{
            title: 'Second Page',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;