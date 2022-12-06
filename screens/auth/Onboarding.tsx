import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { COLORS, FONTS, SIZES } from "../../config";
import { Button } from "../../components";
import { AuthStackParamList } from "../../type";
import { IMAGES } from "../../assets";
import { setBackgroundColorAsync } from "expo-navigation-bar";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "Onboarding">;
}

const Onbarding = ({ navigation }: Props) => {
  React.useEffect(() => {
    setBackgroundColorAsync(COLORS.base);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.dollard}
        style={styles.dollardSign}
        resizeMode="repeat"
      />
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
  dollardSign: {
    position: "absolute",
    width: SIZES.w,
    height: SIZES.h,
    tintColor: COLORS.white,
    opacity: 0.2,
    transform: [{ rotate: "45deg" }],
    top: -SIZES.w / 3,
    left: -SIZES.w / 3,
  },
});
