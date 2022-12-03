import {
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useReducer, useState } from "react";
import { Button, CustomModal, Input } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../../config";
import { IMAGES } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../type";

interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "ResetPassword">;
}

const ResetPassword = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [remindMe, setRemindme] = useReducer((s) => !s, false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ height: SIZES.h }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={SIZES.h < 716}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{ width: SIZES.w, height: SIZES.h }}
          onPress={Keyboard.dismiss}
          accessible={false}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            <TouchableOpacity style={{ marginBottom: SIZES.l }}>
              <Ionicons
                name="chevron-back-outline"
                color={COLORS.black}
                size={SIZES.l}
              />
            </TouchableOpacity>
            <Text style={FONTS.h2}> Create New Password </Text>
            <View style={styles.separator} />
            <View style={styles.separator} />
            <Input placeholder="Email" value={email} setValue={setEmail} />
            <View style={styles.separator} />
            <Input
              placeholder="Password"
              secure
              value={password}
              setValue={setPassword}
            />
            <TouchableOpacity style={styles.reminder} onPress={setRemindme}>
              <View
                style={[
                  center,
                  styles.checkMarker,
                  {
                    backgroundColor: remindMe ? COLORS.base : "transparent",
                  },
                ]}
              >
                {remindMe && (
                  <Ionicons name="checkmark" color={COLORS.white} size={16} />
                )}
              </View>
              <Text style={FONTS.p}>Remember me</Text>
            </TouchableOpacity>

            {/* General terms and conditions of use */}
            <View style={styles.textGroup}>
              <Text>By continuing you aggree our </Text>
              <TouchableOpacity>
                <Text style={{ color: COLORS.base }}>Terms of Services</Text>
              </TouchableOpacity>
              <Text> and </Text>
              <TouchableOpacity>
                <Text style={{ color: COLORS.base }}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <CustomModal
              modalVisible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate("SignIn");
              }}
            />

            <Button
              label="Continue"
              onPress={() => setModalVisible(true)}
              btnType="primary"
            />
          </KeyboardAvoidingView>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const center: StyleProp<ViewStyle> = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  container: {
    padding: SIZES.s,
    backgroundColor: COLORS.white,
  },
  separator: {
    height: SIZES.s,
  },
  reminder: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.s,
  },
  checkMarker: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.base,
    marginRight: SIZES.s / 2,
  },
  textGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    width: SIZES.w - SIZES.l,
    marginBottom: SIZES.s,
    marginTop: SIZES.l,
  },
  footer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: SIZES.s,
  },
});
