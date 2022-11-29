import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "../type";
import AuthNavigator from "./AuthNavigator";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
