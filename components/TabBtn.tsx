import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../config";

interface Props {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
  mb?: number;
  bg?: string;
  fg?: string;
}

const TabBtn = ({ icon, label, onPress, mb, bg, fg }: Props) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", marginBottom: mb || 0 }}
      onPress={onPress}
    >
      <View
        style={[
          styles.tabImgContainer,
          { backgroundColor: bg ? bg : COLORS.lightest },
        ]}
      >
        <Image
          source={icon}
          style={{ width: 20, height: 20, tintColor: fg ? fg : COLORS.base }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={[styles.tabLabel, { color: fg ? COLORS.black : COLORS.base }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabBtn;

const styles = StyleSheet.create({
  tabImgContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  tabLabel: {
    ...FONTS.thin,
    textTransform: "capitalize",
    paddingTop: SIZES.s / 2,
  },
});
