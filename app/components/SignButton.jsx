import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SignButton = ({ title, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className="flex items-center justify-center w-1/2 py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl  bg-grey"
    >
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
