import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS, FONTS, SIZES } from "../../config";
import { Button } from "../../components";
import { AuthStackParamList } from "../../type";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "Onboarding">;
}

const Onbarding = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[FONTS.h2, styles.h2]}>
        Have an amazing experience with SmartPay right now!
      </Text>
      <Button
        onPress={() => navigation.navigate("AuthMethod")}
        label={"Get Started"}
      />
    </View>
  );
};

export default Onbarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkest,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: SIZES.xl,
    paddingHorizontal: SIZES.l,
  },
  h2: { color: COLORS.white, padding: SIZES.m, textAlign: "center" },
});
