import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import Docs from "./src/screens/Docs/Docs";
import Home from "./src/screens/Home/Home";
import Login from "./src/screens/Login/Login";

const data = [
  {
    title: "title1",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
  {
    title: "title",
    description: "asdasdasd",
  },
];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);
  return <Login />;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
