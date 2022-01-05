import React,{useState} from 'react'
import { View,TextInput,SafeAreaView,StyleSheet, Button } from 'react-native'

const TextInputPractice1 = () => {
    const [Name, setName ] = useState("")
    const [Email, setEmail ] = useState("")
    const checkInput = () => {
        if(!Name.trim()){
            alert('Please Enter Name');
        }
        else if(!Email.trim()){
            alert('Please Enter Email');
        }
        else if(Name.trim(),Email.trim()){
            alert('Success');
        }
    }
    
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
            <TextInput placeholder="Enter Name"
            onChangeText={(value) => setName(value)}/>
            <TextInput placeholder="Enter Email"
            onChangeText={(value) => setEmail(value)}/>
            <Button title="SUBMIT" onPress={checkInput} color="#552139"/>
            </View>
        </SafeAreaView>
    )
}
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
     });
export default TextInputPractice1
