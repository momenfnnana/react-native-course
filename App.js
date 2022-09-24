import { useCallback, useEffect, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CustomComponent from "./CustomComponent";

const ChildComponent = ({ title }) => (
  <Text style={{ fontSize: 40 }}>{title}</Text>
);

export default function App() {
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState("");
  const person = useMemo(() => {
    return {
      name: value,
    };
  }, [value, counter]);
  const personHandler = useCallback(() => {
    setValue("momen");
  }, []);

  useEffect(() => {
    console.log('useEffect is working');
  }, [value]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ChildComponent title="Text goes here" />
      <CustomComponent />
      <Button title="press here" onPress={personHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
