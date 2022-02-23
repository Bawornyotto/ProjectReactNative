import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import axios from "axios";
import {useFocusEffect} from '@react-navigation/native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from "native-base";

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => alert("Registering")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  //getData from server
  const getData = async () => {
    setLoading(true);
    const res = await axios.get("https://api.codingthailand.com/api/course");
    // alert(JSON.stringify(res.data.data[0].title));
    setProduct(res.data.data);
    setLoading(false);
  };

  //ทุกๆครั้งที่เข้าหน้า product หรือ focus ที่หน้า product
  //เราจะให้ไปดึงข้อมูลที่ server ตลอดเวลา
  useFocusEffect(
    //usecallBack เอาไว้ optimize ฟังค์ชั่น เพื่อไม่ให้ re-render ของ child component
    React.useCallback(()=>{
      getData();
      
      return ()=>{
        alert('Exit ProductScreen');
      }
    },[])
  )

  //useEffect when A Product is selected จะทำงานเมื่อคลิกที่เมนูสินค้า แค่ 1 รอบเท่านั้น
  // useEffect(() => {
  //   getData();
  //   // return () => {
  //   //   second;
  //   // };
  // }, []);

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  const _onRefresh = ()=>{
    getData();
  }

  return (
    <View>
      <FlatList
        // set the data form server
        data={product}
        // Extract the key from the data with keyExtractor
        keyExtractor={(item, index) => item.id.toString()}
        //pull to refresh
        onRefresh={_onRefresh}
        refreshing={loading}//ถ้า refreshing เป็น true จะรอให้ refresg data
        // render the data with renderItem
        renderItem={({ item }) => (
          <ListItem thumbnail onPress={()=>{
            navigation.navigate('Detail',{
              id:item.id,
              title:item.title // นำค่า title จาก backend ส่งให้ title เพื่อนำไปใช้ใน page Detail screen
            })
          }}>
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
              {/* <Button transparent>
                <Text>View</Text>
              </Button> */}
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
