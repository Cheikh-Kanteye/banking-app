import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";

import { SettingsStackParamList } from "../type";
import {
  ContactUs,
  EditProfile,
  HelpAndSupport,
  Language,
  Notifications,
  Profile,
  Security,
} from "../screens";
import { SIZES } from "../config";

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName="Profile"
      screenOptions={({ navigation }) => {
        return {
          headerTitleAlign: "center",
          headerStyle: { elevation: 0 },
          headerLeft: () => (
            <Feather
              name="chevron-left"
              onPress={navigation.goBack}
              size={24}
              style={{ marginLeft: SIZES.s }}
            />
          ),
        };
      }}
    >
      <SettingsStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen name="EditProfile" component={EditProfile} />
      <SettingsStack.Screen name="Notifications" component={Notifications} />
      <SettingsStack.Screen name="Security" component={Security} />
      <SettingsStack.Screen name="Language" component={Language} />
      <SettingsStack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <SettingsStack.Screen name="ContactUs" component={ContactUs} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
