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
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  outline?: boolean;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({
  label,
  primary,
  secondary,
  disabled,
  outline,
  icon,
  style,
  onPress,
}: Props) => {
  const defaultBg = primary
    ? COLORS.base
    : secondary
    ? COLORS.lighter
    : disabled
    ? COLORS.lightest
    : COLORS.white;
  const fg = primary ? COLORS.white : disabled ? "darkgray" : COLORS.darkest;

  const [bg, setbg] = React.useState(defaultBg);
  const border = outline ? 1 : 0;

  const onPressIn = () => {
    const updateBg = primary
      ? COLORS.darkest
      : secondary
      ? COLORS.light
      : outline
      ? "transparent"
      : COLORS.lightest;
    setbg(updateBg);
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
