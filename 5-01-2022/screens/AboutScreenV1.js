import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-web'

const AboutScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <Text>AboutScreen</Text>
            <Button title='Go to AboutPage again ....'
            onPress={()=>navigation.push('About')}/>
            <Button title='Go to HomePage'
            onPress={()=>navigation.navigate('Home')}/>
            <Button title='Go Back'
            onPress={()=>navigation.goBack()}/>
            <Button title='Go Back to FirstScreen'
            onPress={()=>navigation.popToTop()}/>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})