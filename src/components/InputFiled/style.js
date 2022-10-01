import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    paddingHorizontal: 11,
  },
  input: {
    flex: 1,
    alignSelf: "center",
    height: "100%",
  },
  label: {
    paddingHorizontal: 22,
    marginBottom: 11,
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
});

export default styles;
