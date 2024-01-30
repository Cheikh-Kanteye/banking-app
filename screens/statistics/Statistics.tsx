import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../config";

const Statistics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Statistics</Text>
    </SafeAreaView>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.s,
    backgroundColor: COLORS.white,
  },
});
