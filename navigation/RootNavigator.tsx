import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RootStackParamList } from "../type";
import {
  ContactList,
  EditProfile,
  EReceipt,
  EReceiptDetails,
  HelpAndSupport,
  Home,
  InOutPayment,
  Language,
  NotificationList,
  NotificationSettings,
  RequestPayment,
  Security,
  Transfert,
  ContactUs,
  Cards,
  CardDetails,
  TopUp,
  Refund,
} from "../screens";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SIZES } from "../config";
import BottomNavigator from "./BottomNavigator";

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const notifScreenOpts = ({
    navigation,
  }: {
    navigation: any;
  }): StackNavigationOptions => {
    return {
      headerShown: true,
      headerTitleAlign: "center",
      headerTitle: "Notification",
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
      headerRight: () => {
        return (
          <MaterialCommunityIcons
            name="dots-horizontal-circle-outline"
            onPress={() => null}
            size={24}
            style={{ marginRight: SIZES.s }}
          />
        );
      },
    };
  };

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Tabs" component={BottomNavigator} />
      {/* ========================Home Pages======================== */}
      <RootStack.Screen name="Transfert" component={Transfert} />
      <RootStack.Screen name="Request" component={RequestPayment} />
      <RootStack.Screen name="Contact" component={ContactList} />
      <RootStack.Screen name="EReceipt" component={EReceipt} />
      <RootStack.Screen name="InOutPayment" component={InOutPayment} />
      <RootStack.Screen name="EReceiptDetails" component={EReceiptDetails} />
      <RootStack.Screen
        name="Notifications"
        component={NotificationList}
        options={notifScreenOpts}
      />
      {/* =======================Cards Pages====================== */}
      <RootStack.Screen name="Cards" component={Cards} />
      <RootStack.Screen name="CardDetails" component={CardDetails} />
      <RootStack.Screen name="TopUp" component={TopUp} />
      <RootStack.Screen name="Refund" component={Refund} />

      {/* =======================Settigns Pages====================== */}
      <RootStack.Screen name="EditProfile" component={EditProfile} />
      <RootStack.Screen name="Security" component={Security} />
      <RootStack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
      />
      <RootStack.Screen name="Language" component={Language} />
      <RootStack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <RootStack.Screen name="ContactUs" component={ContactUs} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
