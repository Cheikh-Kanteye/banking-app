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
  Pressable,
  Image,
  Text,
  View,
} from "react-native";

import { COLORS, FONTS, SIZES } from "../../config";
import { RootStackParamList, TabParamList } from "../../type";
import { auth } from "../../firebase.config";
import { IMAGES } from "../../assets";
import { ProfileImg, TabBtn } from "../../components";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const servicesContainerWidth = SIZES.w - SIZES.l;

type tab_type = {
  id: string;
  icon: ImageSourcePropType;
  label: string;
  screen: string;
}[];

const nav_tabs: tab_type = [
  {
    id: "001",
    icon: IMAGES.send,
    label: "transfert",
    screen: "Transfert",
  },
  {
    id: "002",
    icon: IMAGES.download,
    label: "request",
    screen: "Request",
  },
  {
    id: "003",
    icon: IMAGES.exchange,
    label: "In & out",
    screen: "InOutPayment",
  },
];

type services_type = {
  id: string;
  icon: ImageSourcePropType;
  label: string;
  fg: string;
  bg: string;
}[];

const services: services_type = [
  {
    id: "001",
    icon: IMAGES.flash,
    label: "electricity",
    fg: "#FFB947",
    bg: "#FFEFD7",
  },
  {
    id: "002",
    icon: IMAGES.wifi,
    label: "internet",
    fg: "#FA6D62",
    bg: "#FCE9E5",
  },
  {
    id: "003",
    icon: IMAGES.drop,
    label: "water",
    fg: "#63B0F1",
    bg: "#E3F2FC",
  },
  {
    id: "004",
    icon: IMAGES.card,
    label: "e-walet",
    fg: "#836BFE",
    bg: "#E6E7FE",
  },
  {
    id: "005",
    icon: IMAGES.suitcase,
    label: "assurance",
    fg: "#50D272",
    bg: "#DFFFE2",
  },
  {
    id: "006",
    icon: IMAGES.shop,
    label: "shopping",
    fg: "#AB4BB6",
    bg: "#F3E5F5",
  },
  {
    id: "007",
    icon: IMAGES.percent,
    label: "deals",
    fg: "#F45041",
    bg: "#F7E4E3",
  },
  {
    id: "008",
    icon: IMAGES.health,
    label: "health",
    fg: "#61C80A",
    bg: "#F0F6E9",
  },
  {
    id: "009",
    icon: IMAGES.chart,
    label: "finance",
    fg: "#2FBCB3",
    bg: "#DFF2EF",
  },
  {
    id: "010",
    icon: IMAGES.cart,
    label: "order",
    fg: "#FFC235",
    bg: "#FEF6E4",
  },
  {
    id: "011",
    icon: IMAGES.phone,
    label: "credit",
    fg: "#23CADD",
    bg: "#DFF6F8",
  },
  {
    id: "012",
    icon: IMAGES.tv,
    label: "tv",
    fg: "#F45755",
    bg: "#FCE9E5",
  },
];

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
          <ProfileImg name={user?.displayName} photoURL={user?.photoURL} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Feather name="bell" size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <LinearGradient
            colors={[COLORS.darkest, COLORS.light]}
            // start={[0, 0]}
            // end={[1, 1]}
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
