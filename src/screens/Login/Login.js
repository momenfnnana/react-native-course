import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { InputFiled } from "../../components";
import styles from "./style";

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isSwithcOpened, setIsSwithcOpened] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showPasswordHandler = () => {
    setIsPasswordShown((currentState) => !currentState);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <InputFiled
        label="Email"
        placeholder="janboon@gmail.com"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <InputFiled
        label="Password"
        placeholder="******************"
        secureTextEntry={isPasswordShown}
        value={password}
        onChangeText={setPassword}
        rightIcon={
          isPasswordShown ? (
            <Entypo
              name="eye-with-line"
              size={24}
              color="#999999"
              onPress={showPasswordHandler}
            />
          ) : (
            <Entypo
              name="eye"
              size={24}
              color="#999999"
              style={styles.eye}
              onPress={showPasswordHandler}
            />
          )
        }
      />
      <Switch onValueChange={setIsSwithcOpened} value={isSwithcOpened} />
    </View>
  );
};

export default Login;
