import React from "react";
import { View, Button, TextInput, Image, StyleSheet } from "react-native";
import FlatButton from "../components/FlatButton";

const App = () => {
  return (
     <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require("../Images/logo.png")} />
      <TextInput style={styles.input} placeholder={"E-posta giriniz..."}/>
      <TextInput style={styles.input} placeholder={"Şifre giriniz..."}/>
      <FlatButton text="Giriş Yap" />
      <FlatButton text=" Kayıt Ol " />
     </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "aquamarine",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    margin: 50,
  },
  input: {
    padding: 12, 
    margin: 22,
    width: 370,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
 
});




export default App;