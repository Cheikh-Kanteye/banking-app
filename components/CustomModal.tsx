import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { COLORS, FONTS, SIZES } from "../config";
import { IMAGES } from "../assets";
interface Props {
  modalVisible: boolean;
  onRequestClose: () => void;
  onPress: () => void;
}

const CustomModal = ({ modalVisible, onRequestClose, onPress }: Props) => {
  const [btnBg, setBtnBg] = useState(COLORS.base);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}
      statusBarTranslucent
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.modalView}>
          <Image
            source={IMAGES.confirm}
            resizeMode="contain"
            style={{
              width: SIZES.w * 0.6,
              height: SIZES.w * 0.6,
              alignSelf: "center",
            }}
          />
          <Text style={{ ...FONTS.span, textAlign: "center" }}>
            You accept confirmation and you will be redirect to the sign in page
            to sign in
          </Text>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.btn, { backgroundColor: btnBg }]}
            onPressIn={() => setBtnBg(COLORS.darkest)}
            onPressOut={() => setBtnBg(COLORS.base)}
          >
            <Text style={{ ...FONTS.p, color: COLORS.white }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const modalViewHeight = SIZES.h * 0.55;

const styles = StyleSheet.create({
  modalView: {
    paddingVertical: SIZES.s,
    paddingHorizontal: SIZES.l,
    backgroundColor: COLORS.white,
    width: SIZES.w - SIZES.l,
    height: modalViewHeight,
    elevation: 12,
    borderRadius: SIZES.s,
  },
  btn: {
    width: "100%",
    height: SIZES.m * 2,
    marginTop: SIZES.s,
    zIndex: 10,
    borderRadius: SIZES.m,
    justifyContent: "center",
    alignItems: "center",
  },
});
