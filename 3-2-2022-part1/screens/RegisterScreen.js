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
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url,{
                name : values.name,
                email : values.email,
                password : values.password
              });
              alert(res.data.message)
              //กลัยหน้าหลัก
              navigation.navigate('Home');
            } catch (error) {
              //ถ้าไม่สามารถบันทึกข้อมูลได้เช่น อืเมลซํ้า
              alert(error.response.data.errors.email[0]);
            }finally{// ให้ปุ่มสามารถกลับมาคลิกได้อีก
              setSubmitting(false);
            }
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
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}
              >
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.name}</Label>
                </Item>
              )}
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
                  Register
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
