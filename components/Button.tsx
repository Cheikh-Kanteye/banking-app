import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../config";

interface Props {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  outline?: boolean;
  icon?: ImageSourcePropType;
  onPress: () => void;
}

const Button = ({
  label,
  primary,
  secondary,
  disabled,
  outline,
  icon,
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
    <Pressable onPressIn={onPressIn} onPress={onPress} onPressOut={onPressOut}>
      <View
        style={[
          styles.btn,
          {
            backgroundColor: bg,
            borderWidth: border,
            borderColor: icon ? COLORS.black : COLORS.darkest,
            borderRadius: icon ? SIZES.s / 2 : SIZES.m,
          },
        ]}
      >
        {icon && (
          <Image
            source={icon}
            style={{ width: 20, height: 20, marginRight: SIZES.s / 2 }}
            resizeMode="contain"
          />
        )}
        <Text
          style={[
            icon ? FONTS.span : FONTS.p,
            { color: icon ? COLORS.black : fg },
          ]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: SIZES.w - SIZES.xl,
    height: SIZES.m * 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
