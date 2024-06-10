import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import arrow from "../img/arrow.png";
import { useRouter } from "expo-router";

const Circle = () => {
  //circe button with home route
  const router = useRouter();
  return (
    <TouchableOpacity
      className="w-16 h-16 rounded-full bg-gray-200 mr-4 ml-5 flex items-center justify-center"
      onPress={() => router.push("./App")}
    >
      <Image className="h-5 w-5" source={arrow} />
    </TouchableOpacity>
  );
};

export default Circle;
