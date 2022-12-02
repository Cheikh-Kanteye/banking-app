import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { COLORS, FONTS, SIZES } from "../config";

interface Props {
  maxLenght: number;
  otpCode: string;
  setOtpCode: (code: string) => void;
  setPinReady: (pin: boolean) => void;
}

const OTPInput = ({ maxLenght, otpCode, setOtpCode, setPinReady }: Props) => {
  const inputRef = useRef<TextInput>(null);
  const splitInputSize = 300 / maxLenght - SIZES.s;
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setPinReady(otpCode.length === maxLenght);
    //clean up function
    return () => setPinReady(false);
  }, [otpCode]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.hiddenInput}
        onChangeText={setOtpCode}
        maxLength={maxLenght}
        value={otpCode}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType={"number-pad"}
      />
      <View style={styles.splitInputs}>
        {new Array(maxLenght).fill(0).map((_, index) => {
          const codeArr = otpCode.split("");
          const digit = codeArr[index] || "";
          const isLast = index === codeArr.length - 1;
          const isCurrent = index == codeArr.length;
          const isComplete = codeArr.length === maxLenght;
          const isFocused = isCurrent || (isComplete && isLast);
          return (
            <TouchableOpacity key={index} onPress={handleOnPress}>
              <View
                style={[
                  styles.splitBox,
                  {
                    width: splitInputSize,
                    height: splitInputSize,
                    borderRadius: splitInputSize / 2,
                    marginHorizontal: SIZES.s / 2,
                    borderColor:
                      isFocused && isInputBoxFocused
                        ? COLORS.base
                        : COLORS.grey,
                    backgroundColor:
                      isFocused && isInputBoxFocused
                        ? COLORS.lightest
                        : COLORS.white,
                  },
                ]}
              >
                <Text style={FONTS.h5}>{digit}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  hiddenInput: {
    width: 300,
    padding: SIZES.s,
    borderWidth: 1,
    borderRadius: 5,
    position: "absolute",
    opacity: 0,
  },
  splitInputs: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.l,
  },
  splitBox: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
