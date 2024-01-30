// import "intl";
// import "intl/locale-data/jsonp/en";

import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../config";
import {
  RootStackParamList,
  TabParamList,
  nav_tabs,
  services,
} from "../../type";
import { auth } from "../../firebase.config";
import { IMAGES } from "../../assets";
import { ProfileImg, TabBtn } from "../../components";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const servicesContainerWidth = SIZES.w - SIZES.l;

const Tabs = ({ navigateTo }: { navigateTo: (screen: string) => void }) => {
  return (
    <View style={styles.tabContainer}>
      {nav_tabs.map((tab) => {
        return (
          <TabBtn
            label={tab.label}
            key={tab.id}
            icon={tab.icon}
            onPress={() => navigateTo(tab.screen)}
          />
        );
      })}
    </View>
  );
};

const CircleOverlay = ({
  x,
  y,
  top,
}: {
  x: number;
  y: number;
  top?: boolean;
}) => {
  return (
    <LinearGradient
      colors={[COLORS.base, COLORS.lightest]}
      style={{
        width: 300,
        height: 300,
        borderRadius: 150,
        position: "absolute",
        top: y,
        left: x,
        opacity: 0.6,
        transform: [{ rotate: top ? "180deg" : "0deg" }],
      }}
    />
  );
};

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabParamList, "Home">,
    StackNavigationProp<RootStackParamList>
  >;
}

const Home = ({ navigation }: Props) => {
  const user = auth.currentUser;
  const [cardNumber, setCardNumber] = useState("1234567828993548");
  // const numfor = Intl.NumberFormat("en-US");
  const [balance, setBalance] = useState("15,873");
  const [releaseDate, setReleaseDate] = useState("09/25");

  const navigateTo = (screen: string) => {
    navigation.navigate(screen as never);
  };

  const hashedCardNumber = (card: string) => {
    return card
      .replace(/.(?=.{4})/g, "✶")
      .match(/.{1,4}/g)
      ?.join(" ");
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ ...styles.row, justifyContent: "space-between" }}>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <ProfileImg
              name={user?.displayName}
              photoURL={user?.photoURL as string}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Feather name="bell" size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <LinearGradient
            colors={[COLORS.darkest, COLORS.light]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              flex: 1,
              paddingHorizontal: SIZES.s,
              paddingVertical: SIZES.l,
            }}
          >
            <CircleOverlay x={-150 / 2} y={150} />
            <CircleOverlay x={SIZES.w - 150} y={-150} top />
            <View style={{ ...styles.row, justifyContent: "space-between" }}>
              <View>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.white,
                    textTransform: "capitalize",
                  }}
                >
                  {user?.displayName}
                </Text>
                <Text style={{ ...FONTS.thin, color: COLORS.white }}>
                  {hashedCardNumber(cardNumber)}
                </Text>
              </View>
              <View
                style={[
                  styles.row,
                  { justifyContent: "flex-end", alignItems: "baseline" },
                ]}
              >
                <Image
                  source={IMAGES.visa}
                  style={{ width: 60, height: 60, tintColor: COLORS.white }}
                  resizeMode="contain"
                />
                <Image
                  source={IMAGES.mastercard}
                  style={{ width: 50, height: 50, marginLeft: SIZES.s / 2 }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View>
              <Text style={{ ...FONTS.p, color: COLORS.white }}>
                Your Balance
              </Text>
              <View
                style={[
                  styles.row,
                  { justifyContent: "space-between", paddingVertical: SIZES.s },
                ]}
              >
                <Text style={{ ...FONTS.h1, color: COLORS.white }}>
                  ${balance}
                </Text>
                <Text style={{ ...FONTS.span, color: COLORS.white }}>
                  {releaseDate}
                </Text>
              </View>
              <Tabs {...{ navigateTo }} />
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.l,
          }}
        >
          <View
            style={{
              ...styles.row,
              justifyContent: "space-between",
              marginBottom: SIZES.s,
            }}
          >
            <Text style={FONTS.h3}>Services</Text>
            <TouchableOpacity>
              <Text style={{ ...FONTS.span, color: COLORS.base }}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesContainer}>
            {services.map((service) => {
              return (
                <View key={service.id} style={styles.serviceContainer}>
                  <TabBtn
                    icon={service.icon}
                    label={service.label}
                    onPress={() => null}
                    fg={service.fg}
                    bg={service.bg}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.s,
    backgroundColor: COLORS.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: SIZES.w - SIZES.l,
    height: SIZES.h * 0.45,
    borderRadius: SIZES.l,
    marginTop: SIZES.l,
    overflow: "hidden",
  },
  tabContainer: {
    padding: SIZES.s,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: SIZES.s,
    backgroundColor: COLORS.white,
    elevation: 8,
  },
  servicesContainer: {
    width: servicesContainerWidth,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceContainer: {
    width: servicesContainerWidth / 4,
    marginBottom: SIZES.s,
    justifyContent: "center",
    alignItems: "center",
  },
});
