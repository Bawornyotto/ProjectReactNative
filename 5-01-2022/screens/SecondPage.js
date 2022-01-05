import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SecondPage = ({route}) => {
    const{Email}= route.params;
    return (
        <View style={styles.container}>
            <Text styles = {styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style = {styles.textStyle}>Values passed from First Page : {Email}</Text>
        </View>
    )
}

export default SecondPage

const styles =
StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
padding: 20,
},
heading: {
fontSize: 25,
textAlign: 'center',
marginVertical: 10,
},
textStyle: {
textAlign: 'center',
fontSize: 16,
marginVertical: 10,
},
inputStyle: {
width: '80%',
height: 44,
padding: 10,
marginVertical: 10,
backgroundColor: '#DBDBD6',
},
});
