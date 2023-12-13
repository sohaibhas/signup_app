import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Button from "../components/Button";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/Image.png")} />
        <Text style={styles.title}>Welcome to LempMe</Text>
        <Text style={styles.subtitle}>Contacts - simple & secure</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Create New account"}
          bgcolor={"#0F46EA"}
          textclr={"#FFFFFF"}
          Press={() => props.navigation.navigate("Signup")}
        />
        <Button
          title={"Login"}
          bgcolor={"white"}
          textclr={"black"}
          border_size={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    color: "#B5B5BC",
    marginTop: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    gap: 20,
  },
});

export default Home;
