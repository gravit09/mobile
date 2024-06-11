import { View, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useRouter } from "expo-router";
import SignButton from "../components/SignButton";
import LogButton from "../components/LogButton";
import img from "../img/google.png";
import img2 from "../img/Apple.png";
import img3 from "../img/gmail.png";
import Hr from "../components/Hr";
import Find from "../components/Find";
import img4 from "../img/search.png";

const SignIn = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView>
        <View className="w-full mt-4 justify-center">
          <Text className="text-xl  font-medium m-4 color-black">
            Enter Your Mobile Number
          </Text>
          <TextInput
            className="border-2 p-3 text-sm border-grey ml-4 mr-5 h-14 text-lg font-medium rounded-md"
            placeholder="Enter Your Mobile Number here"
          />
          <SignButton title="Continue" handlePress={{}} />
          <Hr />
          <LogButton
            title="Continue With Google"
            logo={img}
            onPress={() => console.log("Continue With Google")}
          />
          <LogButton
            title="Continue With Apple"
            logo={img2}
            onPress={() => console.log("Continue With Apple")}
          />
          <LogButton
            title="Continue With Mail"
            logo={img3}
            onPress={() => router.push("/Mail")}
          />
          <Hr />
          <Find title="Find my Account" logo={img4} />
          <Text className="color-grey m-4 -mt-4">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Drift and its affiliates to the
            number provided.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
