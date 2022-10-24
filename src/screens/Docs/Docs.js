import React, { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styles from "./style";
import { ConsultationSection } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Docs = () => {
  useEffect(() => {
    const accessToken = AsyncStorage.getItem("accessToken");
    accessToken.then((token) => {
      axios.get("https://student.valuxapps.com/api/carts").then((res) => {
        console.log({ res: res });
      });
    });
  }, []);
  return (
    <SafeAreaView
      style={[styles.container, { marginTop: StatusBar.currentHeight }]}
    >
      <ConsultationSection title="Consultation 05/11/2021" />
      <ConsultationSection title="Consultation 05/11/2021" />
    </SafeAreaView>
  );
};

export default Docs;
