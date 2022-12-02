import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, SIZES } from "../../config";
import { IMAGES } from "../../assets";
import { Button } from "../../components";
import { AuthStackParamList } from "../../type";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "AuthMethod">;
}

const AuthMethod = ({ navigation }: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={[FONTS.h1, styles.h1]}>
          Smart<Text style={{ color: COLORS.darkest }}>Pay</Text>
        </Text>
        <Image source={IMAGES.pay} style={styles.image} resizeMode="cover" />
        <Text style={[FONTS.h1, styles.h1]}>Let's you in</Text>
        <View style={styles.separator} />
        <View style={styles.separator} />
        <Button
          icon={IMAGES.facebook}
          outline
          onPress={() => null}
          label="Continue with facebook"
        />
        <View style={styles.separator} />
        <Button
          icon={IMAGES.google}
          outline
          onPress={() => null}
          label="Continue with google"
        />
        <View style={styles.separator} />
        <Button
          icon={IMAGES.apple}
          outline
          onPress={() => null}
          label="Continue with apple"
        />
        <View style={styles.separator} />
        <Text style={FONTS.h5}>Or</Text>
        <View style={styles.separator} />
        <Button
          btnType="primary"
          label="Sign in with password"
          onPress={() => navigation.navigate("SignIn")}
        />
        <View style={styles.separator} />
        <View style={styles.outlineBtnC}>
          <Text style={FONTS.span}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={[FONTS.h6, { color: COLORS.darkest }]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    paddingTop: SIZES.xl,
  },
  h1: { color: COLORS.black, width: "100%", textAlign: "center" },
  image: {
    height: SIZES.h * 0.3,
    width: SIZES.w - SIZES.l,
    marginVertical: SIZES.m,
  },
  separator: { height: SIZES.m / 2 },
  outlineBtnC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
