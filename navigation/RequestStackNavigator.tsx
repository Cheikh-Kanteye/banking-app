import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RequestStackParamList } from "../type";
import { ContactList, EReceipt, RequestPayment } from "../screens";
import { SIZES } from "../config";

const Stack = createStackNavigator<RequestStackParamList>();

const RequestStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerTitleAlign: "center",
          headerTitle: "Request Payment",
          headerLeft: () => {
            return (
              <Feather
                name="chevron-left"
                onPress={navigation.goBack}
                size={24}
                style={{ marginLeft: SIZES.s }}
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="Contact" component={ContactList} />
      <Stack.Screen name="RequestPayment" component={RequestPayment} />
      <Stack.Screen
        name="EReceipt"
        component={EReceipt}
        options={({ navigation }) => {
          return {
            headerTitle: "E-Receipt",
            headerRight: () => {
              return (
                <MaterialCommunityIcons
                  name="dots-horizontal-circle-outline"
                  onPress={navigation.goBack}
                  size={24}
                  style={{ marginRight: SIZES.s }}
                />
              );
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default RequestStackNavigator;
