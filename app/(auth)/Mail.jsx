import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import SignButton from "../components/SignButton";
import open from "../img/visible.png";
import closed from "../img/eye.png";
import { Link } from "expo-router";

const Mail = () => {
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });

  const [loading, setLoading] = useState(false);

  const handlePress = () => {};
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="font-bold text-3xl text-center mt-20">SignIn</Text>
      <Text className="text-lg mt-4">Email</Text>
      <TextInput
        className="border-2 border-gray-300 p-3 text-lg font-medium rounded-md"
        placeholder="Enter Your email id here"
        keyboardType="email-address"
      />
      <Text className="text-lg mt-4">Password</Text>
      <View className="flex-row items-center border-2 border-gray-300 p-3 rounded-md">
        <TextInput
          className="flex-1 text-lg font-medium"
          placeholder="Enter Your password here"
          secureTextEntry={!showPass}
        />
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Image
            source={showPass ? open : closed}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-end m-1">
        <Link href="/sign-up">Forget password?</Link>
      </View>
      <SignButton isLoading={loading} onPress={handlePress} title="SignIn" />
    </View>
  );
};

export default Mail;
