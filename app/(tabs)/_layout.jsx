import React from "react";
import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "react-native-vector-icons";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reader-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
