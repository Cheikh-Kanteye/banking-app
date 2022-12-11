import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, SIZES } from "../../config";
import { ScrollView } from "react-native-gesture-handler";
import { Switch } from "../../components";

type notifType = {
  id: string;
  label: string;
  allow: boolean;
}[];

const notfications: notifType = [
  {
    id: "001",
    label: "General notification",
    allow: true,
  },
  {
    id: "002",
    label: "Sound",
    allow: false,
  },
  {
    id: "003",
    label: "Vibrate",
    allow: false,
  },
  {
    id: "004",
    label: "App updates",
    allow: true,
  },
  {
    id: "005",
    label: "Bill Remember",
    allow: true,
  },
  {
    id: "006",
    label: "Promotion",
    allow: false,
  },

  {
    id: "007",
    label: "Discount available",
    allow: true,
  },
  {
    id: "008",
    label: "Payment Request",
    allow: true,
  },
  {
    id: "009",
    label: "New services available",
    allow: false,
  },
  {
    id: "010",
    label: "New tips available",
    allow: false,
  },
];
interface SwitchProps {
  toggled: boolean;
  onToggle: () => void;
}

const NotifItem = ({ label }: { label: string }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <View style={styles.notifContainer}>
      <Text style={{ ...FONTS.p, textTransform: "capitalize" }}>{label}</Text>
      <Switch toggled={toggled} onToggle={() => setToggled(!toggled)} />
    </View>
  );
};

const Notifications = () => {
  const [notificationList, setNotificationList] =
    useState<notifType>(notfications);

  useEffect(() => {
    setNotificationList(notificationList);
  }, [notificationList]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: SIZES.s }}
      >
        {notificationList.map((notification) => {
          return <NotifItem key={notification.id} label={notification.label} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  notifContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.m,
  },
});
