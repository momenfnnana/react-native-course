import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

const InputFiled = ({
  label,
  placeholder,
  rightIcon,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry || false}
          value={value}
          onChangeText={onChangeText}
          onChange
        />
        {rightIcon}
      </View>
    </View>
  );
};

export default InputFiled;
