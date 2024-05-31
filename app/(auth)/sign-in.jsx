import { View, Text, SafeAreaView, ScrollView, TextInput } from "react-native";
import React from "react";
import SignButton from "../components/SignButton";
import LogButton from "../components/LogButton";
import img from "../img/google.png";
import img2 from "../img/Apple.png";
import img3 from "../img/gmail.png";
import Hr from "../components/Hr";
import Find from "../components/Find";
import img4 from "../img/search.png";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center">
          <Text className="text-xl font-medium m-4 color-black">
            Enter Your Mobile Number
          </Text>
          <TextInput
            className="border-2 border-grey ml-4 mr-5 h-14 text-lg font-medium rounded-md"
            placeholder="Enter Your Mobile Number here"
          />
          <SignButton title="Continue" handlePress={{}} />
          <Hr />
          <LogButton title="Continue With Google" logo={img} />
          <LogButton title="Continue With Apple" logo={img2} />
          <LogButton title="Continue With Mail" logo={img3} />
          <Hr />
          <Find title="Find my Account" logo={img4} />
          <Text className="color-grey m-4 -mt-4">
            By proceeding ,you consent to get calls,whatsApp or SMS messages
            ,including by automated means,from Drift and it's affiliates to the
            number provided.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
