import React,{useState} from 'react'
import {SafeAreaView, View, Text,TextInput,TouchableOpacity,StyleSheet, Button, Alert } from 'react-native'

const TouchablePractice = () => {
    const [Email , setEmail] = useState("")
    const [Password , setPass] = useState("")
    const onPressAlert = () => {
        if(!Email.trim()){
            alert('Please Enter Email')
        }
        else if(!Password.trim()){
            alert('Please Enter Password')
        }
        else if(Email.trim(),Password.trim()){
            alert('Email :' +Email+"\n"+"Password :" + Password)
        }

    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder="Email"
                 onChangeText={setEmail}/>
                 <TextInput style={styles.textInputStyle} placeholder="Password"
                 onChangeText={setPass}/>
                 <TouchableOpacity style={styles.Touchstyle} onPress ={onPressAlert}>
                     <Text>Submit</Text>
                 </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice
const styles = StyleSheet.create({
     container: {
     flex: 1,
     padding: 35,
     },
     textInputStyle: {
     width: '100%',
     height: 40,
     paddingHorizontal: 5,
     borderWidth: 0.5,
     marginTop: 15,
     },
     Touchstyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 10,
        
     },
     });