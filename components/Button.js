import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { View } from "react-native-web";

const Button = ({
  bgcolor,
  title,
  textclr,
  border_size,
  imageIcon,
  iconPosition,
  Press,
}) => {
  const justifyContentStyle =
    iconPosition === "left" ? "space-between" : "center";

  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgcolor,
        borderRadius: 100,
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderWidth: border_size,
        flexDirection: "row",
        justifyContent: justifyContentStyle,
      }}
    >
      {imageIcon && <Image style={{ marginLeft: 10 }} source={imageIcon} />}
      <Text style={{ color: textclr, fontSize: 14 }}>{title}</Text>
      {imageIcon && <Text></Text>}
    </TouchableOpacity>
  );
};

export default Button;
