import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { Cards, Home, Profile, Statistics } from "../screens";
import { TabParamList } from "../type";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, FONTS } from "../config";
import { Text } from "react-native";
import { setBackgroundColorAsync } from "expo-navigation-bar";
const Tab = createBottomTabNavigator<TabParamList>();

const BottomNavigator = () => {
  useEffect(() => {
    setBackgroundColorAsync("rgb(255,255,255)");
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarStyle: {
            paddingVertical: 8,
            display: "flex",
          },
          tabBarHideOnKeyboard: true,
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              color={focused ? COLORS.base : COLORS.grey}
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...FONTS.thin,
                color: focused ? COLORS.base : COLORS.grey,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="bar-chart-2"
              color={focused ? COLORS.base : COLORS.grey}
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...FONTS.thin,
                color: focused ? COLORS.base : COLORS.grey,
              }}
            >
              Statistics
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="credit-card"
              color={focused ? COLORS.base : COLORS.grey}
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...FONTS.thin,
                color: focused ? COLORS.base : COLORS.grey,
              }}
            >
              My Card
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              color={focused ? COLORS.base : COLORS.grey}
              size={24}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...FONTS.thin,
                color: focused ? COLORS.base : COLORS.grey,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
