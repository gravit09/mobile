import { View, Text } from "react-native";
import React from "react";

const Hr = () => {
  return (
    <View className="flex-row items-center my-4">
      <View className="flex-1 h-px bg-gray-400 mx-2" />
      <Text className="text-lg text-gray-400 mx-2">or</Text>
      <View className="flex-1 h-px bg-gray-400 mx-2" />
    </View>
  );
};

export default Hr;
