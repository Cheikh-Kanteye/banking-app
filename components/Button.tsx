import {
  StyleSheet,
  Text,
  View,
  // TouchableOpacity,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  label?: string;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  btnType?: "primary" | "secondary" | "disabled" | "outline";
  onPress: () => void;
}

const Button = ({ label, icon, btnType, style, onPress }: Props) => {
  const defaultBg =
    btnType == "primary"
      ? COLORS.base
      : btnType == "secondary"
      ? COLORS.lighter
      : btnType == "disabled"
      ? COLORS.lightest
      : COLORS.white;
  const fg =
    btnType == "primary"
      ? COLORS.white
      : btnType == "disabled"
      ? "darkgray"
      : COLORS.darkest;

  const [bg, setbg] = React.useState(defaultBg);
  const border = btnType == "outline" ? 1 : 0;

  const onPressIn = () => {
    setbg(
      btnType == "primary"
        ? COLORS.darkest
        : btnType == "secondary"
        ? COLORS.light
        : btnType == "disabled"
        ? COLORS.lightest
        : "transparent"
    );
  };

  const onPressOut = () => {
    setbg(defaultBg);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}
    >
      <View
        style={[
          styles.btn,
          style,
          {
            backgroundColor: bg,
            borderWidth: border,
            borderColor: icon ? COLORS.grey : COLORS.darkest,
            borderRadius: icon ? SIZES.s / 2 : SIZES.m,
          },
        ]}
      >
        {icon && (
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              marginRight: label ? SIZES.s / 2 : 0,
            }}
            resizeMode="contain"
          />
        )}
        {label && (
          <Text
            style={[
              icon ? FONTS.span : FONTS.p,
              { color: icon ? COLORS.black : fg },
            ]}
          >
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.w - SIZES.l,
    height: SIZES.m * 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
