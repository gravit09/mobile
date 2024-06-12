import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const LogButton = ({ title, onPress, isLoading, logo }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className="flex flex-row items-center justify-center w-3/2 h-14 m-4 mt-2 py-3 mb-1 text-sm font-normal transition duration-300 rounded-2xl bg-gray-200"
    >
      <Image className="h-6 w-6 mr-4 " source={logo} />
      <Text className="text-black font-medium text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default LogButton;
