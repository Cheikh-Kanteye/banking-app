import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../config";
import { SafeAreaView } from "react-native-safe-area-context";

const Cards = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text
        style={{ ...FONTS.h2, textAlign: "center", paddingVertical: SIZES.s }}
      >
        My Card
      </Text>
      <View style={styles.cardContainer}></View>
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.s,
  },
  cardContainer: {
    minHeight: SIZES.h * 0.3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightest,
  },
});
