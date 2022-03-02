import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";

import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStoreContext } from '../context/UserContext';
const MenuScreen = ({navigation}) => {
 // const [profile,setProfile] = React.useState(null);
  const userStore=React.useContext(userStoreContext);
  React.useEffect(()=>{
    const getProfile = async ()=>{
      const profile=await AsyncStorage.getItem('@profile');
      if(profile){
        userStore.updateProfile(JSON.parse(profile));
        //setProfile(JSON.parse(profile));
      }
    }
    getProfile();
  },[]);
  return (
    <ScrollView>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',height:150}}>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          เมนูหลัก
        </Text>
        {
          userStore.profile && (
            <>
              <Text style={{color: "blue",fontSize: 20,fontWeight: "bold",}}>ยินดีต้อนรับ {userStore.profile.name}</Text>
              <Text style={{color: "blue",fontSize: 20,fontWeight: "bold",}}>Email: {userStore.profile.email}</Text>
            </>
            
          )
        }
      </View>
        {/* from native base */} 
        <Content>
          <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={()=> navigation.navigate('Home')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={()=> navigation.navigate('Product')}>
            <Left>
              <Button style={{ backgroundColor: "#3455eb" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          {
            !userStore.profile &&(
              <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={()=> navigation.navigate('Login')}>
            <Left>
              <Button style={{ backgroundColor: "#3455eb" }}>
                <Icon active name="log-in" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
            )
          }
          {
            userStore.profile &&(
              <ListItem icon style={{marginBottom:10,marginTop:10}} onPress={async()=>{
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@profile');
                userStore.updateProfile(null);
                navigation.closeDrawer();
              }}>
            <Left>
              <Button style={{ backgroundColor: "#3455eb" }}>
                <Icon active name="log-out" />
              </Button>
            </Left>
            <Body>
              <Text>ออกจากระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
            )
          }
        </Content>
     
    </ScrollView>
  );
};

export default MenuScreen;
