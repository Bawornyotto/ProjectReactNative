import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required("กรุณาป้อนชื่อสกุล"),
  email: Yup.string()
    .email("อืเมลไม่ถูกต้อง")
    .required("กรุณากรอกใหม่อีกครั้ง"),
  password: Yup.string()
    .min(3, "รหัสผ่านต้อง 3 ตัวอักษรขึ้นไป")
    .required("กรุณาป้อนรหัสผ่าน"),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูล
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={ValidateSchema}
          //เมื่อคลิกปุ่ม register ให้ทำงานส่วนนี้
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            //console.log(values);
            //alert(JSON.stringify(values));
            
          }}
        >
          {/* //errors ใช้สำหรับตรวจสอบ state(ถ้สผู้ใช้ไม่กรอกข้อมูลจะให้ error อะไรเกิดขึ้น) */}
          {/* touched เมื่อผู้ใช้กดที่ name แล้วเลื่อนเมาส์ไปด้านนอกช่องข้อมูล โดยไม่กรอกข้อมูล */}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item fixedLabel last>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                />

                {errors.email && touched.email && (
                  <Icon name="close-circle" style={{ color: "red" }} />
                )}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item fixedLabel last>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.email && touched.password && (
                  <Icon name="close-circle" style={{ color: "red" }} />
                )}
              </Item>
              {errors.email && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                //สำหรับเปิด/ปิด ปุ่มการทำงาน
                disabled={isSubmitting}
                block
                large
                style={{ marginTop: 30, backgroundColor: "blue" }}
              >
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
