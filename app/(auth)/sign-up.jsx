import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import SignButton from "../components/SignButton";
import open from "../img/visible.png";
import closed from "../img/eye.png";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });

  const [loading, setLoading] = useState(false);

  const submit = () => {
    createUser("cheetah@gmail.com", "password", "cheetah");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* whenever user click somewhere else keyboard get closed using touchableWithoutFeedback*/}
      <View className="flex-1 bg-white  justify-center">
        <Text className="font-bold text-3xl text-center ">SignUp</Text>
        <View className="p-4">
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
          <Text className="text-lg mt-4">Confirm Password</Text>
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
        </View>
        <SignButton isLoading={loading} handlePress={submit} title="SignUp" />
        <Text className="text-md mt-8 text-center">
          Already have an account?
          <Link className="font-bold" href="/Mail">
            SignIn
          </Link>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
