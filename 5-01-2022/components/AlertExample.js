import React from 'react'
import { StyleSheet, Text, View ,Alert,SafeAreaView,Button } from 'react-native'

const AlertExample = () => {

    const simpleAlertHandler=()=>{
        alert('Hell I am Simple Alert')
    }
    const twoOptionHandler=()=>{
        //function to make two option alert
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert. Do you want to cancle me',
            [
                {
                    text:'Yes',
                    onPress : ()=>console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress : ()=>console.log('No Pressed'),
                }
            ],
            {cancelable:false}
        )
    }
    const threeOptionHandler=()=>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert. Do you want to cancle me',
            [
                {
                    text:'May be',
                    onPress : ()=>console.log('May be Pressed')
                },
                {
                    text:'Yes',
                    onPress : ()=>console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress : ()=>console.log('No Pressed'),
                }
            ],
            {cancelable:false}
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Button title='Simple Alert'
            onPress={simpleAlertHandler}/>
            <Button title='Alert with Two Option'
            onPress={twoOptionHandler}/>
            <Button title='Alert with Three Option'
            onPress={threeOptionHandler}/>
        </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#ecf0f1',
     },
     });