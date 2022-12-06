import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { Cards, Profile, Statistics } from "../screens";
import { TabParamList } from "../type";
import Feather from "react-native-vector-icons/Feather";
import RootNavigator from "./RootNavigator";
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
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingVertical: 8 },
      }}
    >
      <Tab.Screen
        name="Root"
        component={RootNavigator}
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
