import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SignButton = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className="flex items-center justify-center w-3/2 m-4 mt-4 py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl  bg-black"
    >
      <Text className="text-white font-bold text-xl">{title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
