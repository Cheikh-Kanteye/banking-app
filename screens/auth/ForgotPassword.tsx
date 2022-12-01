import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
  Image,
  TextInput,
} from "react-native";
import React, { useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../../config";
import { IMAGES } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../type";
import { Button } from "../../components";

interface InputProps {
  icon: string;
  label: string | undefined;
  value: string | undefined;
  placeholder?: string | undefined;
  isResetType: boolean;
  onChangeText: (text: string) => void;
  selectResetType: () => void;
}

const Input = ({
  icon,
  label,
  value,
  placeholder,
  isResetType,
  onChangeText,
  selectResetType,
}: InputProps) => {
  return (
    <TouchableOpacity
      onPress={selectResetType}
      style={[
        styles.inputContainer,
        { borderColor: isResetType ? COLORS.base : COLORS.grey },
      ]}
    >
      <Ionicons
        name={icon}
        size={22}
        color={isResetType ? COLORS.base : COLORS.grey}
        style={{ marginRight: SIZES.s }}
      />
      <View style={{ flex: 1 }}>
        <Text style={FONTS.thin}>via {label}:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </TouchableOpacity>
  );
};
interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "ForgotPassword">;
}

const ForgotPassword = ({ navigation }: Props) => {
  const [countryCode, setCountryCode] = useState("+221");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
    "77 *** ** 22"
  );
  const [email, setEmail] = useState<string | undefined>(
    "chika.contact@gmail.com"
  );
  const [resetType, setResetType] = useState<"sms" | "email">("sms");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ height: SIZES.h }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={SIZES.h < 716}
      >
        <TouchableOpacity style={{ marginBottom: SIZES.l }}>
          <Ionicons
            name="chevron-back-outline"
            color={COLORS.black}
            size={SIZES.l}
          />
        </TouchableOpacity>
        <Text style={FONTS.h2}> Forgot password</Text>
        <Image
          source={IMAGES.password}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={{ ...FONTS.span, marginBottom: SIZES.s }}>
          Select wich contact detals should we use to reset your password.
        </Text>
        <Input
          value={`${countryCode} ${phoneNumber}`}
          onChangeText={setPhoneNumber}
          icon="chatbubble-outline"
          label="SMS"
          isResetType={resetType == "sms"}
          selectResetType={() => setResetType("sms")}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          icon="mail-outline"
          label="Email"
          isResetType={resetType == "email"}
          selectResetType={() => setResetType("email")}
        />
        <View style={{ height: 50 }} />
        <Button label="Continue" onPress={() => null} primary />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const center: StyleProp<ViewStyle> = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  image: {
    height: SIZES.h * 0.3,
    width: SIZES.w - SIZES.l,
    marginVertical: SIZES.m,
  },
  inputContainer: {
    width: SIZES.w - SIZES.l,
    height: SIZES.m * 2,
    borderWidth: 1,
    borderRadius: SIZES.s / 2,
    paddingHorizontal: SIZES.s,
    flexDirection: "row",
    alignItems: "center",
    bordeWidth: 1,
    marginBottom: SIZES.s,
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
  },
});
