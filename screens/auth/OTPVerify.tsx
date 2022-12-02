import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthStackParamList } from "../../type";
import { COLORS, FONTS, SIZES } from "../../config";
import { Button, OTPInput } from "../../components";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "OTPVerify">;
  route: RouteProp<AuthStackParamList, "OTPVerify">;
}

const OtpVerify = ({ navigation, route }: Props) => {
  const {
    params: { resetType, credential },
  } = route;
  const [otpCode, setOtpCode] = useState<string>("");
  const [pinReady, setPinReady] = useState<boolean>(false);
  const maxCodeLenght = 4;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons
            name="chevron-back-outline"
            color={COLORS.black}
            size={SIZES.l}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <Text style={{ ...FONTS.h4, color: COLORS.base }}>Change number</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ ...FONTS.h2, textAlign: "center" }}>
        Enter authentication code
      </Text>
      <Text
        style={{ ...FONTS.span, textAlign: "center", marginVertical: SIZES.s }}
      >
        Enter the digit that we have sent via the{" "}
        {resetType == "sms" ? "phone number" : "email address"}{" "}
        <Text style={FONTS.h6}>{credential}</Text>
      </Text>
      <OTPInput
        maxLenght={maxCodeLenght}
        otpCode={otpCode}
        setOtpCode={setOtpCode}
        setPinReady={setPinReady}
      />
      <View style={{ height: SIZES.xl }} />
      <Button
        btnType={!pinReady ? "disabled" : "primary"}
        label="Verify"
        onPress={() => {
          if (pinReady) {
            navigation.navigate("ResetPassword");
          } else {
            Alert.alert("invalid code");
          }
        }}
      />
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.s,
  },
});
