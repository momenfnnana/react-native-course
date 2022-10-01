import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import ScrollHeader from "./components/ScrollHeader";

const data = [
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
  {
    title: "Conclusion - 5/11/2021",
    docImage:
      "https://images.ctfassets.net/lzny33ho1g45/T5qqQQVznbZaNyxmHybDT/b76e0ff25a495e00647fa9fa6193a3c2/best-url-shorteners-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
  },
];

const Home = () => {
  const onEndReached = () => {
    console.log("onEndReached accessed");
  };
  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView>
        {data.map((item, index) => (
          <View style={styles.docItem} key={index}>
            <Image style={styles.docImage} source={{ uri: item.docImage }} />
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        onEndReached={onEndReached}
        ListHeaderComponent={<ScrollHeader />}
        numColumns={5}
        renderItem={({ item }) => {
          return (
            <View style={styles.docItem}>
              <Image style={styles.docImage} source={{ uri: item.docImage }} />
              <Text style={{ width: 100, marginHorizontal: 15 }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
      {/* <Modal isVisible={true}>
        <View
          style={{
            // flex: 1,
            backgroundColor: "#fff",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ backgroundColor: "#3C67AF59", color: "#fff", padding: 20 }}
          >
            Hello!
          </Text>
          <Button title="Hide modal" />
        </View>
      </Modal> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  docItem: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    width: 50,
  },
  docImage: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },
});
