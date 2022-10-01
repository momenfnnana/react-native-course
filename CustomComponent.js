import React,{memo} from "react";
import { View, Text } from "react-native";

const CustomComponent = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default memo(CustomComponent);
