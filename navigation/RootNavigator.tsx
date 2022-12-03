import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../type";
import { Home, InOutPayment } from "../screens";
import TransfertStackNavigator from "./TransfertStackNavigator";
import RequestStackNavigator from "./RequestStackNavigator";

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Transfert" component={TransfertStackNavigator} />
      <RootStack.Screen name="Request" component={RequestStackNavigator} />
      <RootStack.Screen name="InOutPayment" component={InOutPayment} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
