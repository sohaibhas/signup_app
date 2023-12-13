import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import phone from "../assets/phone.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Signup = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <View style={styles.header}>
          <Image style={styles.image} source={require("../assets/Frame.png")} />
          <Text style={styles.heading}>Back</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>

      <Button
        title={"Continue"}
        bgcolor={"#0F46EA"}
        textclr={"white"}
        Press={() => props.navigation.navigate("Post")}
      />

      <View style={[styles.lastSection, { marginTop: 40, marginBottom: 40 }]}>
        <View style={styles.separator}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={[styles.btngroup, { marginTop: 20 }]}>
          <Button
            title={"Signup with Phone"}
            bgcolor={"white"}
            textclr={"black"}
            border_size={1}
            imageIcon={phone}
            iconPosition="left"
          />
          <Button
            title={"Signup with Apple ID"}
            bgcolor={"white"}
            textclr={"black"}
            border_size={1}
            imageIcon={apple}
            iconPosition={"left"}
          />
          <Button
            title={"Signup with Google"}
            bgcolor={"white"}
            textclr={"black"}
            border_size={1}
            imageIcon={google}
            iconPosition="left"
          />
          <Button
            title={"Signup with Facebook"}
            bgcolor={"white"}
            textclr={"black"}
            border_size={1}
            imageIcon={facebook}
            iconPosition="left"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 60,
    gap: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    resizeMode: "contain",
  },
  heading: {
    marginLeft: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    color: "#333",
  },
  lastSection: {
    gap: 40,
  },
  btngroup: {
    gap: 10,
  },
});

export default Signup;
