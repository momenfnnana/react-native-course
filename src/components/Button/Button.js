import { Pressable, Text } from "react-native";
import React from "react";
import styles from "./style";

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
