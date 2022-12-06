import { StyleSheet, Dimensions } from "react-native";

export const COLORS = {
  darkest: "#5538ee",
  base: "#6b4eff",
  light: "#9990ff",
  lighter: "#c6c4ff",
  lightest: "#e7e7ff",
  white: "#ffffff",
  black: "#000000",
  greyish: "#dbdbdb",
  grey: "#adb0b2",
  red: "#dd3c36",
};

export const FONTS = StyleSheet.create({
  h1: {
    fontSize: 24,
    lineHeight: 24,
    fontFamily: "Inter-Bold",
  },

  h2: {
    fontSize: 22,
    lineHeight: 24,
    fontFamily: "Inter-Bold",
  },

  h3: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Inter-Medium",
  },

  h4: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "Inter-Bold",
  },

  h5: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter-Medium",
  },

  h6: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter-Bold",
  },

  p: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "Inter-Regular",
  },
  span: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter-Regular",
  },
  thin: {
    fontSize: 12,
    lineHeight: 18,
  },
});

const { width, height } = Dimensions.get("window");

export const SIZES = {
  xl: 64,
  l: 32,
  m: 24,
  s: 16,
  w: width,
  h: height,
};
