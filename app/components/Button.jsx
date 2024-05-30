import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SignButton = () => {
  return (
    <TouchableOpacity className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"></TouchableOpacity>
  );
};

export default SignButton;
