import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifs = [
  {
    id: "new",
    newNotif: [
      {
        id: "001",
        icon: "star",
        notif: "You Get Cashback!",
        message: "You get $7 cashback from payment",
      },
      {
        id: "002",
        icon: "star",
        notif: "New Service is Available",
        message: "Now you can do payment tracking",
      },
      {
        id: "003",
        icon: "star",
        notif: "You Get Cashback!",
        message: "Subscription bill paid to Netflix",
      },
    ],
  },
  {
    id: "old",
    old: [
      {
        id: "001",
        icon: "star",
        notif: "E-Wallet Is Connected!",
        message: "You E-wallet is connected to SmartPay",
      }, 
    ],
  },
];

const NotificationList = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Text>NotificationList</Text>
    </SafeAreaView>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.s,
  },
});
