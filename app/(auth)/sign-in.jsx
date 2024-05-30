import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center">
          <Text className="color-white text-5xl font-bold m-auto mt-44 ">
            Taxi
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
