import { StatusBar } from "expo-status-bar";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import image from "../assets/screenshot_2.png";

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground className="flex-1 justify-end" source={image} />
      <View className="w-full bg-white p-5 items-start">
        <Text className="text-3xl mb-4 font-bold">Get Started With Taxi</Text>
        <Pressable
          className="w-full font-semibold rounded-lg bg-black h-20 items-center"
          onPress={() => router.push("/home")}
        >
          <Text className="text-white text-3xl mt-5">Continue ➲</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
