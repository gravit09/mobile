import { View, Text } from "react-native";
import React from "react";

const Hr = () => {
  //this is used to provide horizontal lines
  return (
    <View>
      <View className="border-b border-grey mr-64 ml-4 mt-6"></View>
      <Text className="ml-52 -mt-4 text-xl color-grey">or</Text>
      <View className="border-b border-grey ml-64 mr-4 mb-5 -mt-3"></View>
    </View>
  );
};

export default Hr;
