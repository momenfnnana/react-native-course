import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styles from "./style";
import { ConsultationSection } from "./components";

const Docs = () => {
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
