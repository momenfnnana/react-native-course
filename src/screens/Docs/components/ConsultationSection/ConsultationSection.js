import { View, Text } from "react-native";
import React from "react";
import Button from "../../../../components/Button/Button";
import styles from "./style";

const RowSection = ({ title, onOpen, onEdit, onDownload }) => {
  return (
    <View style={styles.RowSectionContainer}>
      <Text style={styles.RowSectionTitle}>{title}</Text>
      <View style={styles.ButtonsContainer}>
        <Button title="Open" onPress={onOpen} />
        <Button title="Edit" onPress={onEdit} />
        <Button title="Download" onPress={onDownload} />
      </View>
    </View>
  );
};

const ConsultationSection = ({ title }) => {
  const onOpenHandler = () => {
    console.log("onOpenHandler");
  };
  const onOpenHandler2 = () => {
    console.log("onOpenHandler2");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{title}</Text>
      <RowSection title="Conclusion" onOpen={onOpenHandler} />
      <RowSection title="Certificate of illness " onOpen={onOpenHandler2} />
      <RowSection title="Medication prescription " />
      <View style={styles.speratorLine} />
    </View>
  );
};

export default ConsultationSection;
