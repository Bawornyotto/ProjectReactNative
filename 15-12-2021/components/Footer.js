import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,Button, } from 'react-native'

const Footer = () => {
    const users = [
        {id : 1 , name:'John'},
        {id:2 , name:'Mary'}
    ]
    //update always render
    const [count,setCount] = useState(0) //const count = 0
    const [title,setTitle] = useState(0)

    useEffect(()=>{
        console.log('use effect1')
    })
    //ทำงานแค่รอบเดียว เช่น การเรียกข้อมูล backend
    useEffect(()=>{
        console.log('use effect2')
    },[])

    //จะทำเมื่อตัวแปรใน [] มีการเปลี่ยนแปลง
    useEffect(()=>{
        console.log('use effect3')
    },[title])
    

    return (
        <View>
            <Text style={styles.title}>Thai Nichi Institute of Technology {count}</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1}{user.name}</Text>
                })
            }
            <Button title='Click Me' onPress={() => 
            setCount(count + 1)//update ค่า count
            }/>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
    }
})
