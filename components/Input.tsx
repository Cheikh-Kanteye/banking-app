import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { COLORS, SIZES } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  placeholder: string;
  value: string | undefined;
  secure?: boolean;
  setValue: (text: string) => void;
}

const Input = ({ placeholder, value, secure, setValue }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setFocused(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        { borderColor: focused ? COLORS.base : COLORS.greyish },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure && !showPassword}
      />
      {secure && (
        <Feather
          onPress={() => {
            setShowPassword(!showPassword);
            setFocused(true);
          }}
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color={COLORS.grey}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: SIZES.w - SIZES.l,
    height: SIZES.m * 2,
    borderWidth: 1,
    borderRadius: SIZES.s / 2,
    paddingHorizontal: SIZES.s,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
