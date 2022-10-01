import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ScrollHeader = () => (
  <>
    <Image
      source={require("../../../../assets/header.png")}
      style={styles.headerImage}
    />
    <View style={styles.row}>
      <Text style={styles.listTitle}>Last Documents</Text>
      <Text>View all</Text>
    </View>
  </>
);

export default ScrollHeader;

const styles = StyleSheet.create({
  headerImage: {
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
