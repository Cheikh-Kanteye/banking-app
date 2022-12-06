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
  Alert,
} from "react-native";
import React, { useReducer, useState } from "react";
import { Button, Input } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES } from "../../config";
import { IMAGES } from "../../assets";
import { ScrollView } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../type";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
interface Props {
  navigation: StackNavigationProp<AuthStackParamList, "SignUp">;
}

const SignUp = ({ navigation }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remindMe, setRemindme] = useReducer((s) => !s, false);
  const signUpWithEmailAndPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        //@ts-ignore
        updateProfile(user.user, {
          displayName: name,
        });
      })
      .catch((err) => {
        Alert.alert(err.message);
        throw err;
      });
  };

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
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{ marginBottom: SIZES.l }}
            >
              <Ionicons
                name="chevron-back-outline"
                color={COLORS.black}
                size={SIZES.l}
              />
            </TouchableOpacity>
            <Text style={FONTS.h2}> Create your Account </Text>
            <View style={styles.separator} />
            <View style={styles.separator} />
            <Input placeholder="Name" value={name} setValue={setName} />
            <View style={styles.separator} />
            <Input placeholder="Email" value={email} setValue={setEmail} />
            <View style={styles.separator} />
            <Input
              placeholder="Password"
              secure
              value={password}
              setValue={setPassword}
            />

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

            <Button
              label="Sign up"
              onPress={signUpWithEmailAndPassword}
              btnType="primary"
            />
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <View />
            <View
              style={[
                center,
                {
                  width: SIZES.w - SIZES.l,
                },
              ]}
            >
              <Text style={FONTS.h5}>or continue with</Text>
              <View style={styles.separator} />

              {/* authenfication with social media (facebook, google & apple) */}
              <View style={[center, { flexDirection: "row" }]}>
                <Button
                  icon={IMAGES.facebook}
                  onPress={() => console.log("continue with facebook")}
                  btnType="outline"
                  style={{ width: SIZES.xl, marginRight: SIZES.s }}
                />
                <Button
                  icon={IMAGES.google}
                  onPress={() => console.log("continue with google")}
                  btnType="outline"
                  style={{ width: SIZES.xl }}
                />
                <Button
                  icon={IMAGES.apple}
                  onPress={() => console.log("continue with apple")}
                  btnType="outline"
                  style={{ width: SIZES.xl, marginLeft: SIZES.s }}
                />
              </View>
            </View>
            <View style={[styles.textGroup, center]}>
              <Text style={FONTS.h5}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={{ color: COLORS.base, ...FONTS.h4 }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
