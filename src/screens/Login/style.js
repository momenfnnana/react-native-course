import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "red",
    height: 20,
  },
  input: {
    height: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    marginLeft: 18,
    marginTop: 12,
  },
});

export default styles;
