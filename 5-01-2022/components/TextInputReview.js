import React,{useState} from 'react'
import {View, Text, StyleSheet,TextInput,Button,SafeAreaView,} from 'react-native';

    const TextInputReview = ()=>{
    const [text, onChangeText ] = useState("")
    return(
      <SafeAreaView style={styles.container}>
        <Text>{text}</Text>
        <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text}/>
      </SafeAreaView>
    )
    
    }
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
        },
        input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
        },
        });
    export default TextInputReview;
