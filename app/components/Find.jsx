import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Find = ({ title, handlePress, isLoading, logo }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className="flex flex-row items-center justify-center w-3/2 m-4 mt-4 py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl  bg-white"
    >
      <Image className="h-6 w-6  mr-4 " source={logo} />
      <Text className="text-black font-medium text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default Find;
