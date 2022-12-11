import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { COLORS } from "../config";

interface Props {
  toggled: boolean;
  onToggle: () => void;
}

const Switch = ({ toggled, onToggle }: Props) => {
  return (
    <Pressable
      onPress={onToggle}
      style={[
        styles.container,
        {
          backgroundColor: toggled ? COLORS.base : COLORS.greyish,
          alignItems: toggled ? "flex-end" : "flex-start",
        },
      ]}
    >
      <View style={styles.circle} />
    </Pressable>
  );
};

export default Switch;

const sizeW = 55;
const sizeH = 28;

const styles = StyleSheet.create({
  container: {
    width: sizeW,
    height: sizeH,
    borderRadius: sizeH / 2,
    padding: 2,
  },
  circle: {
    width: sizeH - 4,
    height: sizeH - 4,
    borderRadius: sizeH / 2,
    backgroundColor: COLORS.white,
  },
});
