import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={32} color="green" />
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About',{email:'su.bawornyos_st@tni.ac.th'})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});