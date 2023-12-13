import { View, Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image source={require("../assets/Image.png")} />
    </View>
  );
};

export default Welcome;
